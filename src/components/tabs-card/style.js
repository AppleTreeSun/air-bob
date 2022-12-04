import styled from "styled-components";



export const TabsCardStyle = styled.div`

  margin: 5px 0;

  .item {
    box-sizing: border-box;
    min-width: 120px;
    flex-shrink: 0;
    /* 不加这个，当字数过多时会换行 */
    cursor: pointer;
    padding: 14px 16px;
    margin-right: 16px;
    text-align: center;
    font-size: 17px;
    border: 1px solid #d8d8d8;
    border-radius: 3px;

    ${props => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`