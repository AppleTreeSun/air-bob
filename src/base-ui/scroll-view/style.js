import styled from "styled-components";


export const ScrollViewStyle = styled.div`

  .scroll-content {
    position: relative;
    display: flex;
    
    transition: transform 250ms ease;
  }

  position: relative;
  overflow: hidden;

  .control {
    position: absolute;
    z-index: 9;

    width: 48px;
    height: 100%;

    top: 0;
    bottom: 0;
    margin: auto 0;

    &.left {
      left: -7px;
      background: linear-gradient(
        to right,
        rgb(255,255,255) 0%,
        rgb(255,255,255) 70%,
        rgba(255,255,255,0) 100%
      );
    }

    &.right {
      right: -7px;
      background: linear-gradient(
        to left,
        rgb(255,255,255) 0%,
        rgb(255,255,255) 70%,
        rgba(255,255,255,0) 100%
      );

      .circular {
        right: 0;
      }
    }

    .circular {
      position: absolute;
      width: 28px;
      height: 28px;

      top: 0;
      bottom: 0;
      margin: auto 0;

      border-radius: 50%;
      box-shadow: 0 1px 1px 1px rgba(0,0,0,.14);
      cursor: pointer;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`