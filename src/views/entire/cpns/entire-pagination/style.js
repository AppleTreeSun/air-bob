import styled from "styled-components";



export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;

  .MuiPagination-ul {
    .MuiPaginationItem-root {
      margin: 0 10px;

      &.Mui-selected {
        color: #fff;
        background-color: #222;
      }
    }

    .MuiPaginationItem-icon {
      font-size: 1.75rem;
    }
  }

  .pagination-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .desc {
      margin-top: 16px;
      font-size: 16px;
      color: #222;
    }
  }


`