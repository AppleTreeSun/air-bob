import styled from "styled-components";



export const LeftStyle = styled.div`
   flex: 1;
   
  .logo {
    cursor: pointer;
    margin-left: 27px;
    color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};
  }
`