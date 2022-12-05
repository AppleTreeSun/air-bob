import React, { memo, useState } from "react";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import { CenterStyle } from "./style";
import { CSSTransition } from "react-transition-group";

import SearchTitles from "@/assets/data/search_titles";
import SearchTabs from "./cpns/search-tabs";
import SearchSections from "./cpns/search-sections";

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;

  const titles = SearchTitles.map((item) => item.title);

  const [tabIndex, setTabIndex] = useState(0);

  const searchbar = (
    <CSSTransition
      in={!isSearch}
      classNames="bar"
      timeout={250}
      unmountOnExit={true}
    >
      <div
        className="search-bar"
        onClick={() => searchBarClick && searchBarClick()}
      >
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CSSTransition>
  );

  const searchdetail = (
    <CSSTransition
      in={isSearch}
      classNames="detail"
      timeout={250}
      unmountOnExit={true}
    >
      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex} />
        <div className="search-panel">
          <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
        </div>
      </div>
    </CSSTransition>
  );

  return <CenterStyle>{searchbar}{searchdetail}</CenterStyle>;
});

export default HeaderCenter;
