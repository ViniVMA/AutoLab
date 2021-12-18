import React, { InputHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <S.InputWrapper>
      <label>
        {label}
        <input {...props} />
      </label>
    </S.InputWrapper>
    
  );
};
