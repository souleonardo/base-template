import React from 'react'

import { AreaHeader } from './styled'

import { Link } from 'react-router-dom'

// import { Container } from './styles';

function Topo() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">
          <img src="icons8-trotting-horse-50.png" />
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/config">Configurações</Link>
            </li>
            <li>
              <Link to="/logout">Sair</Link>
            </li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  )
}

export default Topo
