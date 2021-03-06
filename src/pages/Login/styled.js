import styled from 'styled-components'

export const AreaLogin = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #ccc;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font: 24px;
  }

  .organize {
    display: flex;

    a {
      color: #000;
    }
  }

  p {
    font-size: 13px;
    color: #ccc;
  }

  .form-input {
    text-align: left;

    label {
      display: block;
    }

    input {
      margin-bottom: 20px;
      padding: 10px;
      font-size: 16px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 350px;
      transition: 0.3s;

      &:hover {
        border: 1px solid #7d2ae8;
      }
    }
  }
  .footer-login {
    font-size: 13px;

    a {
      font-weight: bold;
      margin-left: 5px;
      color: #4e129c;
      transition: 0.4s;
      cursor: pointer;
    }
  }
`
