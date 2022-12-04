import styled from "styled-components";



export const LongForItemStyle = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 20%;
  padding: 0 8px;

  .album {
    position: relative;

    img {
      width: 100%;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(
        to bottom, 
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 3%, 
        rgba(0,0,0,1) 100%);
    }

    .desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 28px;

      color: #fff;
      text-align: center;

      .city {
        font-size: 18px;
        font-weight: 600;
      }

      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`