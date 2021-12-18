import styled from 'styled-components';


export const LoginWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. .';
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0 auto;

  form {
    width: 100%;
  }
`;

export const Aside = styled.aside`
  height: 100%;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  padding: 70px 0;

  h1 {
    margin-bottom: 6px;
    font-size: 38px;
    color: #3c3c3c;
  }
  p {
    font-size: 12px;
    font-weight: 600;
    color: #a2a2a2;
  }
`;

export const CheckWrapper = styled.div`
  margin-bottom: 44px;
  display: flex;
  justify-content: space-between;

  a, a:visited,, a:active {
  color: inherit;
  text-decoration: none;
}
  a:hover {
    color: #F54A48;
  }

`;


export const Register = styled.div`
    padding-top: 40px;

      a, a:active, a:visited {
        color: #F54A48;
        text-decoration: none;
      }
      

      span {
        color: #000;
      }
`;


export const LogoWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items:center;
    padding: 90px 0 0 150px;

    @media (max-width: 1400px) and (orientation: landscape) {
      padding: 30px 0 0 90px;
    }

    @media (max-width: 760px) and (orientation: landscape) {
      padding: 20px 0 0 60px;
    }

    span {
        font-size: 38px;
        font-weight: 600;
        color: #F54A48;
        Padding-left: 20px;
    }
`
