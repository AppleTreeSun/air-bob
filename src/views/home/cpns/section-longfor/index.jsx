import ScrollView from "@/base-ui/scroll-view";
import LongForItem from "@/components/longfor-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionLongForStyle } from "./style";

const SectionLongFor = memo((props) => {
  const { title, subtitle, list } = props.longFor;

  return (
    <SectionLongForStyle>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="longfor-content">
        <ScrollView>
          {list.map((item, index) => {
            return <LongForItem itemData={item} key={index} />;
          })}
        </ScrollView>
      </div>
    </SectionLongForStyle>
  );
});

SectionLongFor.propTypes = {
  longFor: PropTypes.object,
};

export default SectionLongFor;
