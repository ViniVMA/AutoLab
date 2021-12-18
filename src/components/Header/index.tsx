import React from 'react';
import { Button } from '../Button';
import * as S from './header.style';
import { LogoutIcon } from '../LogoutIcon';
import { Logo } from '../Logo';
import { useHistory } from 'react-router-dom';


export const Header = () => {

  const history = useHistory();

  return (
    <S.Header>
          <Logo />
          <S.ButtonWrapper>
            <Button onClick={(e) => {
                    e.preventDefault();
                    history.push('/')
                    }} title="Sair" icon={<LogoutIcon />} />
          </S.ButtonWrapper>
    </S.Header>
  );
};
