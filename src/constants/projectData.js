import myBizViewImage from '../assets/image/MyBiz/MyBizview.png';
import naruIndexImage from '../assets/image/Naru/Naruindex.png';
import igeIndexImage from '../assets/image/IgE/IgEindex.png';

export const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'MyBiz (마이비즈)',
    badges: ['Mobile App', 'AI Assistant', 'Web Design'],
    image: myBizViewImage,
    targetId: 'mybiz-overview',
  },
  {
    id: 2,
    number: '02',
    title: '나루나루',
    badges: ['Mobile App', 'AI', 'Map'],
    image: naruIndexImage,
    targetId: 'naru-overview',
  },
  {
    id: 3,
    number: '03',
    title: 'IgE',
    badges: ['Web Service', 'Recommendation', 'Health'],
    image: igeIndexImage,
    targetId: 'ige-overview',
  },
];
