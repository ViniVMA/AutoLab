import { Header } from '../../components/Header'
import { EmployeesTable } from '../../components/EmployeesTable';




export function Employees() {
  return (
    <>
      <Header />
      <EmployeesTable pageTitle="Funcionários" listTitle="Listagem de funcionários da empresa" category1="NOME" category2="EMAIL" category3="CPF" category4="VALOR" category5="BIO" />
    </>
  );
};