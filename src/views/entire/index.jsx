import React, { memo, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { fetchEntireDataAction } from '@/store'

import EntireContent from "./cpns/entire-content";
import EntireFilter from "./cpns/entire-filter";
import EntirePagnition from "./cpns/entire-pagination";
import { EntireStyle } from "./style";

const Entire = memo(() => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEntireDataAction())
  }, [dispatch])

  return (
    <EntireStyle>
      <div className="filter">
        <EntireFilter/>
      </div>
      <div className="content">
        <EntireContent/>
      </div>
      <div className="pagination">
        <EntirePagnition/>
      </div>
    </EntireStyle>
  );
});

export default Entire;
