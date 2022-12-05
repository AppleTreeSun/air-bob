import React, { memo, useState } from "react";
import { AlbumStyle } from "./style";
import PictureBrowser from "@/base-ui/picture-browser";

const DetailAlbum = memo((props) => {

  const { imgUrls = [] } = props

  const [showBrowser, setShowBrowser] = useState(false)

  return (
    <AlbumStyle>
      <div className="album">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true) }>
            <img src={imgUrls[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            imgUrls.slice(1, 5).map((item) => {
              return (
                <div className="item" key={item} onClick={() => setShowBrowser(true) }>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="show-btn" onClick={() => setShowBrowser(true) }>显示照片</div>

      { showBrowser && <PictureBrowser pictureUrls={imgUrls} closeClick={() => setShowBrowser(false)} /> }
    </AlbumStyle>
  );
});

export default DetailAlbum;
