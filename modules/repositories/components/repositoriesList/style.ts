import styled from 'styled-components'
export default styled.div`
overflow-x: hidden;
  .table-wrapper {
    align-items: center;
    /* display: flex; */
    justify-content: center;
    padding-block: 1.5rem;
    overflow-x: scroll;
    @media screen and (max-width: 1024px) {
      overflow-y: hidden;
    }
  }
  .pagination-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-block: 1.5rem;
  }
  .profile-head {
    padding-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  .searchContainer{
    position: relative;

    input{
      border: 1px solid lightgrey;
      border-radius: 8px;
      padding-block:0.5rem;
      width: 95%;
      text-indent: 10px;
  
      


    }
    input:focus{
      outline: none;
    }
    button{
      position: absolute;
      right: 5%;
      top: 20%;
      background-color: transparent;
      border: none;
    }
  }
 
`

