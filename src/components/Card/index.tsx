import React, { ButtonHTMLAttributes } from 'react';
import * as S from './card.style';
import Image from '../../../src/assets/images/firstimage.png';
import { useHistory } from 'react-router-dom';

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle: string;
  linkText: string;
  img: string;
}



export const Card = ({
  title,
  subtitle,
  linkText,
  img,
  ...props
}: CardProps) => {


  return (
  
    <S.CardWrapper>
      <S.Card>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button {...props}>{linkText}</button>
      </S.Card>
      <S.ImageWrapper>
        <img src={img} alt="" />
      </S.ImageWrapper>
    </S.CardWrapper>
  );
};
