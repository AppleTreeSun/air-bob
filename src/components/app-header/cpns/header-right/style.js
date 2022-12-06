import styled from "styled-components";


export const RightStyle = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor};

    .btn {
      padding: 12px 15px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.theme.isAlpha ? 'rgba(255,255,255,.3)' : '#f5f5f5'};
        border-radius: 22px;
      }
    }
  }

  .profile {
    position: relative;
    /* color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor}; */
    color: ${props => props.theme.text.primaryColor};

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 77px;
    height: 42px;
    margin-right: 24px;

    border: 1px solid #ccc;
    border-radius: 25px;

    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}


    .panel {
      position: absolute;

      top: 54px;
      right: 0;

      width: 240px;

      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);

      > .top, .bottom {
        display: block;
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }

  }
`