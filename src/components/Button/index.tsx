import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './button.style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  title: string;
  icon?: ReactNode;
};

export function Button({
  isOutlined = false,
  title,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.BTN className={`button ${isOutlined ? 'outlined' : ''}`} {...props}>
      {title}
      {icon && <span>{icon}</span>}
    </S.BTN>
  );
}
