import styled from "styled-components";



export const IndicatorStyle = styled.div`
  overflow: hidden;

  .indicator-content {
    position: relative;
    display: flex;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`