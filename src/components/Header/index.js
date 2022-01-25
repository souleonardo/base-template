import React from 'react'

import { AreaHeader } from './styled'

// import { Container } from './styles';

function Topo() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">LOGOMARCA</div>

        <nav>
          <ul>
            <li>Configurações</li>
            <li>Sair</li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  )
}

export default Topo
