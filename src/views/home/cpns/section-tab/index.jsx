import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import SectionHeader from "@/components/section-header";

import { SectionTabStyle } from "./style";
import SectionContent from "@/components/section-content";
import TabsCard from "@/components/tabs-card";
import SectionFooter from "@/components/section-footer";

const SectionTab = memo((props) => {
  const { tabData } = props;

  const initName = tabData.dest_address[0].name;
  // 这个initName只在组件第一次渲染时有用，所有要保证组件渲染时一定有数据
  // 第二种方法：useEffect依赖tabData，值变化时设置name，但是这样组件被渲染了3次

  const [name, setName] = useState(initName);

  const tabNames = tabData.dest_address.map((item) => item.name);

  const tabLists = tabData.dest_list[name];

  const handleTabClick = useCallback((name, index) => {
    setName(name);
  }, []);

  return (
    <SectionTabStyle>
      <SectionHeader title={tabData.title} subtitle={tabData.subtitle} />
      <TabsCard tabNames={tabNames} tabClick={handleTabClick} />
      <SectionContent roomlist={tabLists} itemWidth="33.3%" />
      <SectionFooter name={name} />
    </SectionTabStyle>
  );
});

SectionTab.propTypes = {
  tabData: PropTypes.object,
};

export default SectionTab;
