import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { BrowserStyle } from "./style";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import classNames from 'classnames'

import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import Indicator from "../indicator";

const PictureBrowser = memo((props) => {

  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(true)

  // 当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleArrowClick = (isRight) => {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;

    setCurrentIndex(newIndex);

    setIsNext(isRight);

    // console.log(newIndex);
  };

  const handlePreviewClick = index => {
    // 右移
    setIsNext(index > currentIndex)

    // 改变index
    setCurrentIndex(index)
  }

  return (
    <BrowserStyle isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="arrow left" onClick={() => handleArrowClick(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="arrow right" onClick={() => handleArrowClick(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="container">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="preview-content">
          <div className="top">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={() => setShowList(!showList)}>
              <span>{ showList ? '隐藏' : '显示'}照片列表</span>
              { showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop /> }
            </div>
          </div>
          <div className="bottom">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div 
                    className={classNames("item", { active: currentIndex === index })} 
                    key={item}
                    onClick={() => handlePreviewClick(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserStyle>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
