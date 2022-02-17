import Media from 'react-media';
import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';

const testData = [
  {
    _id: '620a151b740b8d3f34aabfb0',
    typeTx: 'income',
    date: 'Mon Feb 14 2022 10:38:51 GMT+0200 (Восточная Европа, стандартное время)',
    month: 2,
    year: 2022,
    sum: 3000,
    balance: 3000,
    comment: 'Зарплата',
    categoryId: '620960d811efb6729e961639',
    owner: '620931770a8d2ef1efb1d157',
  },
  {
    _id: '620a1555740b8d3f34aabfb4',
    typeTx: 'outcome',
    date: 'Mon Feb 14 2022 10:39:49 GMT+0200 (Восточная Европа, стандартное время)',
    month: 2,
    year: 2022,
    sum: 1000,
    balance: 2000,
    comment: 'Подарок',
    categoryId: '620960d811efb6729e961639',
    owner: '620931770a8d2ef1efb1d157',
  },
];

export default function TableHome() {
  return (
    <Media query="(max-width: 768px)">
      {(matches) =>
        matches ? (
          <MobileTable data={testData} />
        ) : (
          <DesktopTable data={testData} />
        )
      }
    </Media>
  );
}
