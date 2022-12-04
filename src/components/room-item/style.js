import styled from "styled-components";



export const RoomItemStyle = styled.div.attrs({
  descColor: props => props.verifyColor || 'red',
  roomItemWidth: props => props.itemWidth || '25%'
})`
  box-sizing: border-box;
  padding: 8px;
  width: ${props => props.roomItemWidth};
  flex-shrink: 0;

  .album {
    position: relative;
    padding-top: 66.6%;
    /* background-color: red; */
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.descColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    cursor: pointer;

    ${props => props.theme.mixin.doubleLine}
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.theme.mixin.primaryColor};

    .count {
      margin-right: 2px;
      margin-left: 4px;
    }
  }
`