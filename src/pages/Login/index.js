import React from 'react'
import { AreaLogin } from './styled'

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'

function Login() {
  return (
    <AreaLogin>
      <h1>Faça login em sua conta</h1>

      <BtnDefaultIcons>
        <FacebookIcon />
        <div className="center">Fazer login com o Facebook</div>
      </BtnDefaultIcons>

      <BtnDefaultIcons>
        <GoogleIcon />
        <div className="center">Fazer login com o Google</div>
      </BtnDefaultIcons>

      <p>OU</p>

      <form>
        <div className="form-input">
          <label>E-mail</label>
          <input type="email"></input>
        </div>

        <div className="form-input">
          <label>Senha</label>
          <input type="password"></input>
        </div>
      </form>
      <BtnDefault>Entrar</BtnDefault>
    </AreaLogin>
  )
}

export default Login
