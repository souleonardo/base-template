import React from 'react'
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom'
import { AreaLogin } from './styled'
import { BrowserRouter, Link } from 'react-router-dom'

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

function Login() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route
          extact
          path="/registrar"
          element={
            <AreaLogin>
              <h1 className="organize">
                <Link to="/">
                  <ArrowBackIosNewIcon />
                </Link>
                Crie sua conta
              </h1>

              <p>Crie sua conta, é gratis!</p>

              <form>
                <div className="form-input">
                  <label>Nome</label>
                  <input type="text"></input>
                </div>
                <div className="form-input">
                  <label>E-mail</label>
                  <input type="email"></input>
                </div>

                <div className="form-input">
                  <label>Senha</label>
                  <input type="password"></input>
                </div>
              </form>
              <BtnDefault>Comece agora</BtnDefault>

              <div className="footer-login">
                Já possui uma conta?
                <Link to="/">Fazer login</Link>
              </div>

              <div></div>
            </AreaLogin>
          }
        ></Route>
        <Route
          extact
          path="/"
          element={
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

              <div className="footer-login">
                Não tem uma conta?
                <Link to="/registrar">Registre-se</Link>
              </div>
            </AreaLogin>
          }
        ></Route>
      </Routes>
=======
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

        <div className="footer-login">
          Não tem uma conta?
          <Link to="/registrar">Registre-se</Link>
        </div>
      </AreaLogin>
>>>>>>> 43c7fc2b1b324dbe2d4f90fbb1329267c020cf5b
    </BrowserRouter>
  )
}

export default Login
