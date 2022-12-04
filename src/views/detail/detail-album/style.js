import styled from "styled-components";



export const AlbumStyle = styled.div`
  > .album {
    display: flex;
    height: 600px;

    /* 排它 */
    &:hover {
      .cover {
        opacity: 1 !important;
        /* 整体变暗 */
      }

      .item:hover {
        /* 单个hover变亮 */
        .cover {
          opacity: 0 !important;
        }
      }
    }

    .left {
      width: 50%;

      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        &:hover {
          img {
            transform: scale(1.08);
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 0.3s ease;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-color: rgba(0,0,0,0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }
      }
    }

    .right {
      width: 50%;

      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }

      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &:hover {
          img {
            transform: scale(1.08);
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 0.3s ease;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          background-color: rgba(0,0,0,0.3);
          opacity: 0;
          transition: opacity 200ms ease;
        }
      }
    }
    
  }
`