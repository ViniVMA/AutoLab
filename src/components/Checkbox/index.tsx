import React, { InputHTMLAttributes } from 'react';
import * as S from './checkbox.style';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

export const CheckBox = ({ label, id, ...props }: CheckBoxProps) => {
  return (
    <S.CheckWrapper>
      <input className="styled-checkbox" id={id} type="checkbox" {...props} />
      <label htmlFor={id} className={props.checked ? 'active' : ''}>
        {label}
      </label>
    </S.CheckWrapper>
  );
};
