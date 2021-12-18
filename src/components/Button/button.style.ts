import styled from 'styled-components';

export const BTN = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;

  height: 37px;
  width: 100%;
  border-radius: 3px;
  padding: 10px;

  font-weight: 500;
  background: #f54a48;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-left: 10px;
  }

  &:not(:disabled):hover {
    background: #df3938;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
