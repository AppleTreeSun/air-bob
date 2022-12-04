import styled from "styled-components";



export const SectionFooterStyle = styled.div`
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  color: ${props => props.color};

  &:hover {
    text-decoration: underline;
  }

  .text {
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    margin-right: 6px;
  }
`