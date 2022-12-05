import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";

import classNames from 'classnames';

import { RoomItemStyle } from "./style";

import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";

const RoomItem = memo((props) => {
  const { roomItem, itemWidth, itemClick } = props;

  const swiperRef = useRef()

  const [selectIndex, setSelectIndex] = useState(0)

  const handleArrowClick = (e, isRight) => {
    e.stopPropagation()
    // 上一个面板/下一个面板
    isRight ? swiperRef.current.next() : swiperRef.current.prev()

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = roomItem.picture_urls.length - 1
    if (newIndex > roomItem.picture_urls.length - 1) newIndex = 0

    setSelectIndex(newIndex)
  }

  const handleDotClick = (e, index) => {
    e.stopPropagation()
    
    swiperRef.current.goTo(index)
    setSelectIndex(index)
  }

  const imgFragment = (
    <div className="album">
      <img src={roomItem.picture_url} alt="" />
    </div>
  );

  const swiperFragment = (
    <div className="swiper">
      <div className="control">
        <div className="arrow left" onClick={(e) => handleArrowClick(e, false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="arrow right" onClick={(e) => handleArrowClick(e, true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            roomItem.picture_urls &&
              roomItem.picture_urls.map((item, index) => {
                return (
                  <div className="dot-outer" key={index} onClick={(e) => handleDotClick(e, index)}>
                    <span className={classNames("dot-inner", {
                      active: selectIndex === index
                    })}></span>
                  </div>
                );
              })
          }
        </Indicator>
      </div>
      <Carousel autoplay={true} ref={swiperRef} dots={false}>
        {roomItem.picture_urls &&
          roomItem.picture_urls.map((item, index) => {
            return (
              <div className="album" key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
      </Carousel>
    </div>
  );

  return (
    <RoomItemStyle
      verifyColor={roomItem?.verify_info?.text_color}
      itemWidth={itemWidth}
      onClick={() => itemClick && itemClick(roomItem)}
    >
      {roomItem.picture_urls ? swiperFragment : imgFragment}
      <div className="desc">{roomItem.verify_info.messages.join(".")}</div>
      <div className="name">{roomItem.name}</div>
      <div className="price">¥{roomItem.price}/晚</div>
      <div className="bottom">
        <Rating
          value={roomItem.star_rating ?? 4.5}
          readOnly
          size="small"
          sx={{ fontSize: "14px", color: "#00848A" }}
          precision={0.5}
        />
        <div className="count">{roomItem.reviews_count}</div>
        <div className="comment">{roomItem?.bottom_info?.content}</div>
      </div>
    </RoomItemStyle>
  );
});

RoomItem.propTypes = {
  roomItem: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick: PropTypes.func
};

export default RoomItem;
