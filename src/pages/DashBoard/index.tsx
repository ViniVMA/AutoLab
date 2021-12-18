import { useParams, useHistory} from 'react-router-dom';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { List } from './Links';

import * as S from './dashboard.style';

type RoomParams = {
  id: string;
};

export const DashBoard = () => {
  const params = useParams<RoomParams>();

  const history = useHistory();

  

  return (
    <>
      <Header />
    <S.PageWrapper>
      <S.Main>
        <S.Hero>
          <h1>Bem-vindo, Carlos</h1>
          <p>Menu</p>
        </S.Hero>
        <S.CardsWrapper>
          {List.map(({ title, subtitle, linkText, img, link }, index) => {
          
            return (
              <Card
                key={index}
                title={title}
                subtitle={subtitle}
                linkText={linkText}
                img={img}
                onClick={()=> history.push(link)} />
            );
          })}
        </S.CardsWrapper>
      </S.Main>
    </S.PageWrapper>
   </>
  );
};
