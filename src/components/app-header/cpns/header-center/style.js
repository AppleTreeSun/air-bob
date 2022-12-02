import styled from "styled-components";



export const CenterStyle = styled.div`
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    height: 48px;

    padding: 0 8px;

    border: 1px solid #ddd;

    border-radius: 24px;

    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .text {
      color: #222;
      padding: 0 16px;
      font-weight: 600;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      border-radius: 50%;

      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

`