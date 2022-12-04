import React, { memo } from "react";
import SectionHeader from "@/components/section-header";

import { SectionStyle } from "./style";
import SectionContent from "@/components/section-content";
import SectionFooter from "@/components/section-footer";

const SectionCol4 = memo((props) => {

  const { sectionData } = props

  return (
    <SectionStyle>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle} />
      <SectionContent roomlist={sectionData.list}/>
      <SectionFooter/>
    </SectionStyle>
  );
});

export default SectionCol4;
