import * as S from './vehiclestatus.style'

interface StatusProps {
  title: string;
}

export const Status = ({title}: StatusProps) => {

  console.log(title)

  let newText;

  let color;
    switch(title) {
    case 'sold':
    color = "1"
    newText ='Vendido'
    break;
    case 'pendente':
    color = "2"
    newText ='Reservado'
    break;
    case 'disponivel':
    color = "3"
    newText ='Disponível'
    break;
    default:
    color = "0"
    newText ='NaN'
    break
    }

  return(
  <S.Status color={color}>{newText}</S.Status>
  )
  }