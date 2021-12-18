import firstImage from '../../../../src/assets/images/firstimage.png';
import secondImage from '../../../../src/assets/images/secondimage.png';
import thirdImage from '../../../../src/assets/images/thirdimage.png';

export const List = [
  {
    title: 'Veículos reservados e vendidos',
    subtitle: 'Veículos reservados e vendidos por você',
    linkText: '147 Veículos',
    img: firstImage,
    link: '/admin/my-vehicles',
  },
  {
    title: 'Listagem geral de veículos',
    subtitle: 'Listagem de veículos de toda a empresa',
    linkText: '180 Veículos',
    img: secondImage,
    link: '/admin/all-vehicles',
  },
  {
    title: 'Funcionários da empresa',
    subtitle: 'Listagem de todos os funcionários da empresa',
    linkText: '147 funcionários',
    img: thirdImage,
    link: '/admin/employees',
  },
];
