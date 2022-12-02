import React, { memo } from "react";
import { LeftStyle } from "./style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftStyle>
      <div className="logo">
        <IconLogo/>
      </div>
    </LeftStyle>
  );
});

export default HeaderLeft;
