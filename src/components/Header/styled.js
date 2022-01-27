import styled from 'styled-components'

export const AreaHeader = styled.div`
  height: 60px;
  background-image: linear-gradient(to right, #fff, #000);
  color: #fff;

  .container {
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }
  .logo {
    flex: 1;
  }

  nav {
    ul {
      display: flex;
    }

    li {
      list-style: none;
      margin-left: 20px;

      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: #f58800;
        }
      }
    }
  }
`
