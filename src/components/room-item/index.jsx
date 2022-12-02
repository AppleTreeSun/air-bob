import PropTypes from "prop-types";
import React, { memo } from "react";

import { RoomItemStyle } from './style'

const RoomItem = memo((props) => {
  const { roomItem, itemWidth  } = props;

  return (
    <RoomItemStyle
      verifyColor={roomItem?.verify_info?.text_color}
      itemWidth={itemWidth}
    >
      <div className="album">
        {/* <img src={roomItem.picture_url} alt="" /> */}
      </div>
      <div className="desc">{roomItem.verify_info.messages.join(".")}</div>
      <div className="name">{roomItem.name}</div>
      <div className="price">¥{roomItem.price}/晚</div>
      <div className="bottom">
        <div className="count">{roomItem.reviews_count}</div>
        <div className="comment">{roomItem?.bottom_info?.content}</div>
      </div>
    </RoomItemStyle>
  );
});

RoomItem.propTypes = {
  roomItem: PropTypes.object,
  itemWidth: PropTypes.string
};

export default RoomItem;
