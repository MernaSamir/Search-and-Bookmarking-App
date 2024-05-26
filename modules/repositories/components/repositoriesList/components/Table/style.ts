import styled from 'styled-components'

export default styled.div`
  display: table;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  &.company-table {
    width: 100%;
    position: relative;
    min-width: 100%;
    .table-body-item {
      b {
        font-size: 16px;
        font-weight: 700;
      }
    }
    .table-header {
      padding-block: 10px;
      border-top: 1px solid gray;
      .table-header-item {
        font-size: 12px;
      }
    }
  }

  .table-header {
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    width: 100%;

    .table-header-item {
      color: #000000;
      display: flex;
      font-size: 16px;
      font-weight: 400;
      gap: 1rem;
      line-height: 23px;
      width: 100px;
      button {
        background: unset;
        border: 0;
        cursor: pointer;
        display: grid;
        outline: none;
        place-items: center;
      }
    }
  }
  .table-body {
    width: 100%;
    .table-body-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid gray;
      padding-block: 1.5rem;

     
      > div {
        width: 100px;
      }
    }
    .actions {
      align-items: center;
      display: flex;
      min-width: 0 !important;
      button {
        background: none;
        border: 0;
        cursor: pointer;
        display: grid;
        height: 32px;
        max-width: 32px;
        min-width: 32px;
        place-content: center;
        width: 32px;
        &.outline {
          border: 1px solid;
        }
        &.circle {
          border-radius: 50%;
        }
        &.squared {
          border-radius: 5px;
        }
        &.large {
          max-width: 64px;
          min-width: 64px;
        }
     
        svg {
          height: 24px;
          width: 24px;
        }
      }
    }
  }
  .no-data {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 50vh;
    justify-content: center;
  }
`
