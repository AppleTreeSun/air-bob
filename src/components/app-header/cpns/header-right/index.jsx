import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo, useState, useEffect } from "react";
import { RightStyle } from "./style";

const HeaderRight = memo(() => {

  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {

    const handleWindowClick = () => {
      // 事件的捕获由外向内
      // 当点击Profile的时候，这个函数已经触发了，但是后面又冒泡触发了Profile的点击
      // console.log('事件的捕获');
      setShowPanel(false)
    }

    window.addEventListener("click", handleWindowClick, true)

    return () => {
      // 清除副作用
      window.removeEventListener("click", handleWindowClick, true)
    }

  }, [])


  const handleProfileClick = () => setShowPanel(true)

  return (
    <RightStyle>
      <div className="btns">
        <div className="btn">登录</div>
        <div className="btn">注册</div>
        <div className="btn">
          <IconGlobal/>
        </div>
      </div>

      <div className="profile" onClick={handleProfileClick}>
        <IconMenu/>
        <IconAvatar/>

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item">注册</div>
                <div className="item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightStyle>
  );
});

export default HeaderRight;
