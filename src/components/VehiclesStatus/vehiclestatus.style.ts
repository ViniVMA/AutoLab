import styled, { css } from 'styled-components';

interface ColorProps {
    color: string;
}

export const Status = styled.span<ColorProps>`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    background-color: #D6F3E9;
    color: #34C38F;
    font-size: 16px;

  ${({color}:ColorProps) => css`

    ${color === "1" &&
  `
    background-color: #FDDBDA;
    color: #F54A48;
  `}

${color === "2" &&
  `
    background-color: #FEF3D5;
    color: #FAC12F;
  `}

${color === "3" &&
  `
    background-color: #D6F3E9;
    color: #34C38F;
  `}
  `};
`
