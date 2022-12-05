import styled from "styled-components";



export const ContentStyle = styled.div`
  margin-top: 109px;
  position: relative;
  padding: 40px 20px;

  .title {
    margin-left: 8px;
    color: ${props => props.theme.color.primaryColor};
  }

  .entire-content {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px);
  }
`