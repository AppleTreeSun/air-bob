import React, { memo } from "react";
import { LeftStyle } from "./style";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()

  const goHome = () => navigate('/home')

  return (
    <LeftStyle>
      <div className="logo" onClick={goHome}>
        <IconLogo/>
      </div>
    </LeftStyle>
  );
});

export default HeaderLeft;
