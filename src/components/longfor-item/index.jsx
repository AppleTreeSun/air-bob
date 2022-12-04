import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongForItemStyle } from "./style";

const LongForItem = memo((props) => {

  const { picture_url, city, price } = props.itemData;

  return (
    <LongForItemStyle>
      <div className="album">
        <img src={picture_url} alt="" />
        <div className="cover"></div>
        <div className="desc">
          <div className="city">{city}</div>
          <div className="price">均价 {price}</div>
        </div>
      </div>
    </LongForItemStyle>
  );
});

LongForItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongForItem;
