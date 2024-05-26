import styled from 'styled-components'

export default styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  justify-content: center;
    align-items: center;
  > div {
    align-items: center;
    display: flex;
    gap: 16px;
       @media screen and (max-width: 768px) {
        gap: 8px;
       }

  }
  li {
    :not(:has(.pagination-input)) {
      /* background: lightgray; */
      border-radius: 50%;
      /* color:  gray; */
      cursor: pointer;
      display: grid;
      font-weight: 700;
      height: 45px;
      place-items: center;
      width: 45px;
      @media screen and (max-width: 768px) {
        width: 32px;
        height: 32px;
       }
    }
  }
  .previous,
  .next {
    svg {
    width: 15px;
    path {
      fill: gray!important;
      stroke: gray!important;
      
    }
  }
  }
  .active {
    background: #fff !important;
    color: lightgreen !important;
    pointer-events: none;
  }
  .disabled {
    cursor: default;
    pointer-events: none;
  }
  .pagination-input {
    background: lightgray;
    border: none;
    height: 24px;
    outline: none;
    width: 50px;
  }
`
