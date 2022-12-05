import styled from "styled-components";




export const FilterStyle = styled.div`

  position: fixed;
  top: 81px;
  left: 0;
  right: 0;

  z-index: 999;

  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;

  .item {
    margin: 0 6px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer;

    &.active {
      color: #fff;
      border: 1px solid #00848a;
      background-color: #00848a;
    }
  }
`