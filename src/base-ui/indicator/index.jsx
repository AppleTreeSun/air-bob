import PropTypes from "prop-types";
import React, { memo, useRef, useEffect } from "react";

import { IndicatorStyle } from "./style";

const Indicator = memo((props) => {

  const { selectIndex = 0 } = props

  const contentRef = useRef()

  useEffect(() => {
    // console.log('selectIndex：', selectIndex);

    // 1.获取selectIndex对应的item的offsetLeft和clientWidth
    const selectItemEl = contentRef.current.children[selectIndex]
    const selectItemElOffsetLeft = selectItemEl.offsetLeft
    const selectItemElClientWidth = selectItemEl.clientWidth

    // 2.获取content的clientWidth和scrollWidth
    const contentElWidth = contentRef.current.clientWidth
    const contentElScroll = contentRef.current.scrollWidth

    // 3.获取元素到容器中心点的距离
    // 如果小于0，不需要移动，scrollWidth的左边缘最多紧靠clientWidth的左边缘，也就是说scrollWidth只能右移
    // 如果大于最大滚动差，则等于最大滚动差，scrollWidth的右边缘最多紧靠clientWidth的右边缘
    let distance = selectItemElOffsetLeft + selectItemElClientWidth * 0.5 - contentElWidth * 0.5

    if (distance < 0) distance = 0

    const totalDistance = contentElScroll - contentElWidth
    if (distance > totalDistance) distance = totalDistance

    contentRef.current.style.transform = `translateX(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorStyle>
      <div className="indicator-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorStyle>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;
