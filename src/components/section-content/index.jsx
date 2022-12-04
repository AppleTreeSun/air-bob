import React, { memo } from "react";
import RoomItem from "../room-item";
import { SectionContentStyle } from "./style";

const SectionContent = memo((props) => {


  const { roomlist = [], itemWidth } = props

  return (
    <SectionContentStyle>
      {
        roomlist.slice(0, 8).map((item, index) => {
          return <RoomItem roomItem={item} key={index} itemWidth={itemWidth}/>
        })
      }
    </SectionContentStyle>
  );
});

export default SectionContent;
