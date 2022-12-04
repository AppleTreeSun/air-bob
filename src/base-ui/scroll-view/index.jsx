import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import PropTypes from "prop-types";
import React, { memo, useState, useRef, useEffect } from "react";

import { ScrollViewStyle } from "./style";

const ScrollView = memo((props) => {
  const { children } = props;

  
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [posIndex, setPosIndex] = useState(0);
  
  const scrollContentRef = useRef()

  const scrollDistance = useRef()
  // 保存可滚动的距离
  useEffect(() => {
    // 1.右边的按钮显不显示，取决于父元素的scrollWidth是否大于clientWidth
    // 如果大于 就显示

    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth

    // console.log('元素：', scrollContentRef.current);

    // console.log('可滚动的距离：', scrollWidth);

    // console.log('元素的宽度：', clientWidth);

    // 多出的宽度
    const diffDistance = scrollWidth - clientWidth
    scrollDistance.current = diffDistance
    // 子元素溢出了，显示按钮
    setShowRight(diffDistance > 0)
  }, [children])

  const handleArrowClick = (isRight) => {
    // 新的index
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    // 新的el
    const newEl = scrollContentRef.current.children[newIndex]
    // 新的el距离定位元素的offsetLeft
    const toLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translateX(-${toLeft}px)`

    setPosIndex(newIndex)

    // 判断是否显示左边的按钮
    // 只要 toLeft > 0 发生了左移就要显示左边的按钮
    setShowLeft(toLeft > 0)

    // 判断是否显示右边的按钮
    // 如果子元素的 offsetLeft 的值大于了 可滚动的距离 scrollDistance 就不要显示了
    // 换言之 如果 可滚动的距离 scrollDistance 大于子元素的 offsetLeft 就显示按钮
    // console.log('可滚动的距离: ', scrollDistance.current);
    // console.log('子元素的 offsetLeft: ', toLeft);
    setShowRight(scrollDistance.current > toLeft)
  }

  return (
    <ScrollViewStyle>
      {showLeft && (
        <div className="control left" onClick={() => handleArrowClick(false)}>
          <div className="circular">
            <IconArrowLeft />
          </div>
        </div>
      )}

      {showRight && (
        <div className="control right" onClick={() => handleArrowClick(true)}>
          <div className="circular">
            <IconArrowRight />
          </div>
        </div>
      )}

      <div className="scroll-content" ref={scrollContentRef}>
        {children}
      </div>
    </ScrollViewStyle>
  );
});

ScrollView.propTypes = {
  children: PropTypes.array,
};

export default ScrollView;
