import React, { memo, useState, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import HeaderCenter from "./cpns/header-center/index";
import HeaderLeft from "./cpns/header-left/index";
import HeaderRight from "./cpns/header-right/index";

import { HeaderStyle, SearchAreaStyle } from "./style";

import { useScrollPosition } from "@/hooks";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  // 定义组件内部的状态
  const [isSearch, setIsSearch] = useState(false);

  // 从redux中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );

  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();

  // 记录前一个的位置
  const prevY = useRef(0);
  // 没有弹出来时，useRef记录的永远是scrollY
  if (!isSearch) prevY.current = scrollY;
  // 当弹窗弹出来 再 滚动了30px后 关闭弹窗
  // 这里要注意 向上滚动 和 向下滚动 都要关闭弹窗
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false);

  // 透明度的逻辑
  // topAlpha 为 true 并且 得在最顶部
  const isAlpha = topAlpha && scrollY === 0;

  //  isAlpha 为 true，isSearch 一定为 true
  console.log('isAlpha: ', isAlpha);

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderStyle className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            {/* isAlpha 为 true，isSearch 一定为 true */}
            <HeaderCenter
              isSearch={ isAlpha || isSearch}
              searchBarClick={() => setIsSearch(true)}
            />
            {/* 点击 search-bar 弹出 */}
            <HeaderRight />
          </div>
          {/* <div className="search-area"></div> */}
          <SearchAreaStyle isSearch={ isAlpha || isSearch} />
          {/* search-area 只有一个底板的作用 */}
        </div>
        {isSearch && (
          <div className="cover" onClick={() => setIsSearch(false)}></div>
        )}
        {/* 点击蒙版 关闭 */}
      </HeaderStyle>
    </ThemeProvider>
  );
});

export default AppHeader;
