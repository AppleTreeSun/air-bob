import React, { memo } from "react";

import HeaderCenter from "./cpns/header-center/index";
import HeaderLeft from "./cpns/header-left/index";
import HeaderRight from "./cpns/header-right/index";

import { HeaderStyle } from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderStyle>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderStyle>
  );
});

export default AppHeader;
