import React, { memo } from "react";
import { FooterWrap } from "./style";

import footerData from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrap>
      <div className="content">
        <div className="top">
          {
            footerData.map((item, index) => {
              return (
                <dl className="item" key={index}>
                  <dt className="name">{item.name}</dt>
                  {
                    item.list.map((subitem, subindex) => {
                      return <dd className="subitem" key={subindex}>{subitem}</dd>
                    })
                  }
                </dl>
              )
            })
          }
        </div>
        <div className="bottom">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </FooterWrap>
  );
});

export default AppFooter;
