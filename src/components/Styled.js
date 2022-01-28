import styled from 'styled-components'

export const BtnDefaultIcons = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  border: 0px;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.4s;
  .center {
    text-align: center;
    width: 100%;
  }

  &:hover {
    background-color: #ccc;
  }
`

export const BtnDefault = styled(BtnDefaultIcons)`
  background-color: #7d2ae8;
  color: #fff;
  display: inline;
  cursor: pointer;
  border-radius: 5px;
  &hover {
    background-color: #4e129c;
  }
`
