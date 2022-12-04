import styled from "styled-components";



export const RoomItemStyle = styled.div.attrs({
  descColor: props => props.verifyColor || 'red',
  roomItemWidth: props => props.itemWidth || '25%'
})`
  box-sizing: border-box;
  padding: 8px;
  width: ${props => props.roomItemWidth};
  flex-shrink: 0;

  /* 这个rules其实是 imgFragment 和 swiperFragment 公有的 */
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

  .swiper {
    position: relative;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      .control {
        display: flex;
      }
    }

    /* 控制器 */
    .control {
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;

      display: none;
      justify-content: space-between;

      .arrow {
        width: 83px;
        display: flex;
        align-items: center;
        justify-content: center;

        /* 设置svg的颜色 */
        color: #fff;

        &.left {
          background-image: linear-gradient(
            90deg, 
            rgba(0,0,0,0.25) 0%, 
            transparent 100%
          );
        }

        &.right {
          background-image: linear-gradient(
            275deg,
            rgba(0,0,0,0.25) 0%,
            transparent 100%
          );
        }
      }
    }

    /* indicator */
    /* 外部父组件的容器限宽 */
    .indicator {
      position: absolute;
      z-index: 99;

      bottom: 10px;
      left: 0;
      right: 0;

      width: 30%;
      margin: 0 auto;

      .dot-outer {
        width: 20%;

        display: flex;
        justify-content: center;
        align-items: center;

        .dot-inner {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;

          &.active {
            width: 8px;
            height: 8px;
            background-color: #00848a;
          }
        }
      }
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