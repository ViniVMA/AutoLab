import react,{useEffect, useState} from 'react';
import * as S from './allvehicles.style';
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'


export function AllVehicles() {
  return (
    <>
      <Header />
      <Table pageTitle="Todos Veículos" listTitle="Listagem geral de veículos" category1="MARCA" category2="MODELO" category3="ANO" category4="KM" category5="COR" category6="STATUS" category7="CHASSI" category8="VALOR"/>
      
    </>
  );
}
