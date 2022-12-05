import styled from "styled-components";



export const FooterWrap = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;

  > .content {
    width: 1032px;
    margin: 0 auto;

    padding: 48px 0;

    .top {
      display: flex;

      .item {
        width: 25%;

        .name {
          margin-bottom: 16px;
          font-weight: 700;
        }

        .subitem {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .bottom {
      margin-top: 30px;
      border-top: 1px solid #EBEBEB;
      padding: 20px;
      color: #767676;

      text-align: center;
    }
  }
`