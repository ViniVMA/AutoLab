import styled from 'styled-components';

export const CardWrapper = styled.section`
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  display: flex;
  box-shadow: 3px 9px 42px -24px rgba(51, 43, 51, 0.15);
`;

export const Card = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 26px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    letter-spacing: -0.02em;
    margin-bottom: 44px;
    color: #858585;
  }

  button {
    display: block;
    border: none;
    background: none;
    font-weight: bold;
    margin: 0 0 0 auto;

    &:hover {
      color: red;
      opacity: 0.6;
    }

    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  background: red;
  border: none;
  border-radius: 0 6px 6px 0;
  width: 258px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 6px 6px 0;
  }
`;
