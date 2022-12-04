import React, { memo } from "react";
import { AlbumStyle } from "./style";

const DetailAlbum = memo((props) => {

  const { imgUrls = [] } = props

  return (
    <AlbumStyle>
      {
        imgUrls.length > 5 && (
          <div className="album">
            <div className="left">
              <div className="item">
                <img src={imgUrls[0]} alt="" />
                <div className="cover"></div>
              </div>
            </div>
            <div className="right">
              {
                imgUrls.slice(1, 5).map((item) => {
                  return (
                    <div className="item" key={item}>
                      <img src={item} alt="" />
                      <div className="cover"></div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </AlbumStyle>
  );
});

export default DetailAlbum;
