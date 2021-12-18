import react from 'react';
import * as S from './myvehicles.style';
import { Header } from '../../components/Header'
import { Table } from '../../components/Table';




export function MyVehicles() {
  return (
    <>
      <Header />
      <Table pageTitle="Seus Veículos" listTitle="Listagem de veículos reservados e vendidos" category1="MARCA" category2="MODELO" category3="ANO" category4="KM" category5="COR" category6="STATUS" category7="CHASSI" category8="VALOR"/>
      
    </>
  );
}