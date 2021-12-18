import react,{useEffect, useState, useCallback} from 'react';
import * as S from './table.style';
import axios from 'axios';
import { Status } from '../VehiclesStatus'
import { Button } from '../Button'

interface DataParams {
  nome: string;
  email: string;
  cpf: string;
  valor: string;
  bio: string;
}


interface TableProps {
    category1?: string;
    category2?: string;
    category3?: string;
    category4?: string;
    category5?: string;
    listTitle?: string;
    pageTitle?: string;
    buttonIcon?: string;

  
};


export function EmployeesTable(props: TableProps ) {
  
  const [data, setData] = useState<DataParams[]>([]);
  const {category1, category2, category3, category4, category5, listTitle, pageTitle} = props
  useEffect(() => {
    const getApi = async () => {
      const { data } = await axios.get(
        'https://61bcf255d8542f0017824a96.mockapi.io/api/v1/Employees',
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
          <S.ButtonBack>Anterior</S.ButtonBack>
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
          </S.Divider>
          <div className="employeesList">
            {data?.map(
              (
                { nome, email, cpf, valor, bio },
                index,
              ) => 
              {
                  return (
                    <ul className="employeesInfos" key={index}>
                      <li>{toCapitalize(nome)}</li>
                      <li>{toCapitalize(email)}</li>
                      <li>{cpf}</li>
                      <li>R$ {valor}</li>
                      <li>{toCapitalize(bio)}</li>
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
