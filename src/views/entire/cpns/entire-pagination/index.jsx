import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { fetchEntireDataAction } from "@/store";

import { PaginationStyle } from "./style";

const EntirePagnition = memo(() => {
  const { totalCount, currentPage } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20)

  const startCount = (currentPage - 1) * 20 + 1;
  const endCount = currentPage * 20;

  const dispatch = useDispatch()
  const handlePageChange = (event, page) => {
    console.log(page);

    window.scrollTo({
      top: 0
    })

    dispatch(fetchEntireDataAction(page))
  }

  return (
    <PaginationStyle>
      {!!totalCount && (
        <div className="pagination-content">
          <Pagination count={totalPage} onChange={handlePageChange}/>
          <div className="desc">
            第 {startCount} - {endCount} 个房源，共{totalCount}个
          </div>
        </div>
      )}
    </PaginationStyle>
  );
});

export default EntirePagnition;
