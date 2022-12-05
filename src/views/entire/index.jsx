import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction, setHeaderConfigAction } from "@/store";

import EntireContent from "./cpns/entire-content";
import EntireFilter from "./cpns/entire-filter";
import EntirePagnition from "./cpns/entire-pagination";
import { EntireStyle } from "./style";
// import AppHeader from "@/components/app-header";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction());
    dispatch(setHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireStyle>
      {/* <AppHeader/> */}
      <EntireFilter />
      <EntireContent />
      <EntirePagnition />
    </EntireStyle>
  );
});

export default Entire;
