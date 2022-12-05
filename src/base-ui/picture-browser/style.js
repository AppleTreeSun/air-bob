import styled from "styled-components";



export const BrowserStyle = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  background-color: #333;

  display: flex;
  flex-direction: column;

  > .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;

    display: flex;
    justify-content: center;

    .control {
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      display: flex;
      justify-content: space-between;

      .arrow {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 83px;
        cursor: pointer;

        color: #fff;
      }
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      /* 设最大宽度，当宽度大很多时，设一个最大的宽度 */
      /* 要不然图片展示出来很丑 */
      min-width: 105vh;
      /* img是有内容撑开的，img溢出的部分要隐藏掉 */
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;

        user-select: none;
      }


      /* img的动画 */
      .pic-enter {
        /* 右边 控制器的点击 初始位置应该平移 100% */
        /* 左边 控制器的点击 初始位置应该平移 -100% */

        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    margin-top: 10px;
    height: 150px;
    
    display: flex;
    justify-content: center;

    .preview-content {
      max-width: 105vh;
      color: #fff;

      > .top {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      > .bottom {
        margin-top: 3px;
        height: ${props => props.showList ? "67px" : "0"};
        transition: height 300ms ease;
        overflow: hidden;

        .item {
          margin-right: 15px;
          cursor: pointer;

          &.active {
            img {
              opacity: 1;
            }
          }

          img {
            height: 67px;
            opacity: 0.5;
          }
        }
      }
    }
  }

`