import React, { memo } from "react";
import SectionHeader from "@/components/section-header";

const SectionCol4 = memo((props) => {

  const { sectionData } = props

  return (
    <SectionCol4>
      <SectionHeader title={sectionData?.title} subtitle={sectionData?.subtitle}/>
    </SectionCol4>
  );
});

export default SectionCol4;
