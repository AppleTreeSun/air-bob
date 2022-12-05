// import AppHeader from "@/components/app-header";
import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import DetailAlbum from "./detail-album";
import { DetailStyle } from "./style";

import { setHeaderConfigAction } from '@/store'

const Detail = memo(() => {
  const { detail } = useSelector(
    (state) => ({
      detail: state.detail.detail,
    }),
    shallowEqual
  );

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailStyle>
      {/* <AppHeader/> */}
      <DetailAlbum imgUrls={detail.picture_urls} />
      <div>Detail</div>


    </DetailStyle>
  );
});

export default Detail;
