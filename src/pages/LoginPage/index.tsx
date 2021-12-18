import { useState } from 'react';
import * as S from './loginpage.style';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { CheckBox } from '../../components/Checkbox';
import { Logo } from '../../components/Logo';
import LoginPageIMG from '../../assets/images/LoginPageIMG.png';
import { useHistory } from 'react-router-dom';

export function LoginPage() {
  const [roomCode, setRoomCode] = useState('');
  const [password, setPassWord] = useState('');
  const [checked, setChecked] = useState(false);
  
  const history = useHistory();

  return (
    <>
      <S.LoginWrapper>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.FormWrapper>
          <S.TextWrapper>
            <h1>Bem-vindo à AutoLuby</h1>
            <p>Faça o login para acessar sua conta.</p>
          </S.TextWrapper>
          <form onSubmit={(e) => {
                  e.preventDefault();
                  history.push('/admin/dashboard')
                  }} >
            <Input
              label="Endereço de email"
              type="email"
              placeholder="@mail.com"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
              className="mb-auth"
            />
            <Input
              label="Senha"
              type="password"
              placeholder="senha"
              onChange={(event) => setPassWord(event.target.value)}
              value={password}
              className="mb-auth"
            />
            <S.CheckWrapper>
              <CheckBox
                label="Lembrar minha senha"
                id="psswd"
                onChange={() => setChecked((prevState) => !prevState)}
                checked={checked}
              />
              <a href="/">Esqueceu a senha?</a>
            </S.CheckWrapper>

            <Button type="submit" title="Entrar" />
          </form>
          <S.Register>
          <a href="/"><span>Ainda não tem uma conta? </span>Criar conta</a>
          </S.Register>
        </S.FormWrapper>
        <S.Aside>
          <S.Img
            src={LoginPageIMG}
            alt="Ilustração simbolizando perguntas e respostas"
          />
        </S.Aside>
      </S.LoginWrapper>
    </>
  );
}
