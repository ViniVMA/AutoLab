import React, { HTMLAttributes} from 'react';
import { useHistory } from 'react-router-dom'

import LogoImg from '../../assets/images/logo.svg';
import * as S from './logo.style';





export const Logo = () => {

  const history = useHistory();
  return(
  <S.LogoWrapper  onClick={()=> history.push('/')}>
    <img src={LogoImg} alt="AutoLuby Logo" />
    <span>AutoLuby</span>
  </S.LogoWrapper>
  )
}

