import React, { memo } from "react";
import SectionHeader from "@/components/section-header";

import { SectionStyle } from "./style";
import SectionContent from "@/components/section-content";

const SectionCol4 = memo((props) => {

  const { sectionData } = props

  return (
    <SectionStyle>
      <SectionHeader title={sectionData.title}/>
      <SectionContent roomlist={sectionData.list}/>
    </SectionStyle>
  );
});

export default SectionCol4;
