import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionPlusStyle } from "./style";

const SectionPlus = memo((props) => {
  const { title, subtitle, list } = props.plus;

  return (
    <SectionPlusStyle>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="plus-content">
        <ScrollView>
          {list.map((item, index) => {
            return <RoomItem roomItem={item} key={index} itemWidth="20%" />;
          })}
        </ScrollView>
      </div>
      <SectionFooter/>
    </SectionPlusStyle>
  );
});

SectionPlus.propTypes = {
  plus: PropTypes.object,
};

export default SectionPlus;
