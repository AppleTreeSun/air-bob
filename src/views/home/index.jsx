import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchHomeDataAction, setHeaderConfigAction } from "@/store";

import { isEmptyObject } from "@/utils";


import HomeBanner from "./cpns/home-banner";
import { HomeStyle } from "./style";

import SectionCol4 from "./cpns/section-col4";
import SectionTab from './cpns/section-tab';
import SectionLongFor from "./cpns/section-longfor";
import SectionPlus from "./cpns/section-plus";
// import AppHeader from "@/components/app-header";

const Home = memo(() => {
  const { 
    goodPrice,
    highScore,
    discount,
    hotRecommend,
    longFor,
    plus
  } = useSelector(
    (state) => ({
      goodPrice: state.home.goodPrice,
      highScore: state.home.highScore,
      discount: state.home.discount,
      hotRecommend: state.home.hotRecommend,
      longFor: state.home.longFor,
      plus: state.home.plus
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(setHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch]);

  return (
    <HomeStyle>
      {/* <AppHeader/> */}
      <HomeBanner />
      <div className="content">
        {isEmptyObject(discount) && <SectionTab tabData={discount}/>}
        {isEmptyObject(goodPrice) && <SectionCol4 sectionData={goodPrice} />}
        {isEmptyObject(highScore) && <SectionCol4 sectionData={highScore} />}
        {isEmptyObject(hotRecommend) && <SectionTab tabData={hotRecommend}/>}
        {isEmptyObject(longFor) && <SectionLongFor longFor={longFor}/>}
        {isEmptyObject(plus) && <SectionPlus plus={plus}/>}
      </div>
    </HomeStyle>
  );
});

export default Home;
