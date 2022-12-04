import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import DetailAlbum from "./detail-album";
import { DetailStyle } from "./style";

const Detail = memo(() => {
  const { detail } = useSelector(
    (state) => ({
      detail: state.detail.detail,
    }),
    shallowEqual
  );

  return (
    <DetailStyle>
      <DetailAlbum imgUrls={detail.picture_urls} />
      <div>Detail</div>
    </DetailStyle>
  );
});

export default Detail;
