import react,{useEffect, useState, useCallback} from 'react';
import * as S from './table.style';
import axios from 'axios';
import { Status } from '../VehiclesStatus'
import { Button } from '../Button'

interface DataParams {
  marca: string;
  modelo: string;
  ano: number;
  km: number;
  cor: string;
  status: string;
  chassi: string;
  valor: string;
}


interface TableProps {
    category1?: string;
    category2?: string;
    category3?: string;
    category4?: string;
    category5?: string;
    category6?: string;
    category7?: string;
    category8?: string;
    listTitle?: string;
    pageTitle?: string;
    buttonIcon?: string;

  
};


export function Table(props: TableProps ) {
  
  const [data, setData] = useState<DataParams[]>([]);
  const {category1, category2, category3, category4, category5, category6, category7, category8, listTitle, pageTitle} = props
  useEffect(() => {
    const getApi = async () => {
      const { data } = await axios.get(
        'https://mocki.io/v1/d7a1ed79-9983-4082-97f4-5a036abd1b26',
      );
      // console.log(data);
      if (data) {
        setData(data);
      }
    };
    getApi();
  }, []);

  console.log(data);


  const toCapitalize =  useCallback((str) => {
    const capitalized = str[0].toUpperCase() + str.slice(1)
    return capitalized 
    }, []);     

    const createDigits = () => {
      const digits = [];
  
      for (let i = 1; i <4; i++) {
        digits.push(<button key={i}>{i}</button>);
      }
  
      return digits;
    }
    
  return (
    <>
      <S.TableBody>
      <div></div>
      <S.TableWrapper>
          <S.PageTitle>{pageTitle}</S.PageTitle>
        <S.ListWrapper>
          <S.TitleWrapper>
          <S.TableTitle>{listTitle}</S.TableTitle>
        <div className="buttonWrapper">
          <S.ButtonBack> Anterior </S.ButtonBack>
            <div className="pageNumbers">{createDigits()}</div>
          <S.ButtonNext>Avançar</S.ButtonNext>
         </div>
          </S.TitleWrapper>
          <S.Divider>
            <li>{category1}</li>
            <li>{category2}</li>
            <li>{category3}</li>
            <li>{category4}</li>
            <li>{category5}</li>
            <li>{category6}</li>
            <li>{category7}</li>
            <li>{category8}</li>
          </S.Divider>
          <div className="CarList">
            {data?.map(
              (
                { marca, modelo, ano, km, cor, status, chassi, valor },
                index,
              ) => 
              { console.log(status)
                  return (
                    <ul className="vehiclesInfos" key={index}>
                      <li>{toCapitalize(marca)}</li>
                      <li>{toCapitalize(modelo)}</li>
                      <li>{ano}</li>
                      <li>{km}</li>
                      <li>{toCapitalize(cor)}</li>
                      <li><Status title={status} /></li>
                      <li>{chassi.toUpperCase()}</li>
                      <li>{valor}</li>
                    </ul>
                  );
                },
            )}
          </div>
        </S.ListWrapper>
      </S.TableWrapper>
        <div></div>
      </S.TableBody>
    </>
  );
}
