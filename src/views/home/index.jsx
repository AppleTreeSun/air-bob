import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchHomeDataAction } from "@/store";

import { isEmptyObject } from '@/utils'


import HomeBanner from "./cpns/home-banner";
import { HomeStyle } from "./style";
import SectionCol4 from "./cpns/section-col4";

const Home = memo(() => {
  const { goodPrice } = useSelector(
    (state) => ({
      goodPrice: state.home.goodPrice,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeStyle>
      <HomeBanner />
      <div className="content">
        { isEmptyObject(goodPrice) && <SectionCol4 sectionData={goodPrice}/> }
      </div>
    </HomeStyle>
  );
});

export default Home;
