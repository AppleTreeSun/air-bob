import styled from "styled-components";


export const CenterStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;

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

  .search-detail {
    position: relative;

    .search-panel {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* bar进入 */
  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  /* bar离开 */
  .bar-exit {
    opacity: 0;
  }

  /* detail进入 */
  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  /* detail离开 */
  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }
`