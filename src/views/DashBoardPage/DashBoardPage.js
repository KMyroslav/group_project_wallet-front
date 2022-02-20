import Media from 'react-media';

import styles from './DashBoardPage.module.scss';

import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import TableHome from 'components/TableHome';
import Currency from 'components/Currency';
import Header from 'components/Header';
import { Route } from 'react-router-dom';
import DiagramTab from 'components/DiagramTab/DiagramTab';

export default function DashBoardPage() {
  return (
    <>
      <div className={styles.blur}>
        <div className="container">
          <Header />
          <div className={styles.navTableWrap}>
            <div className={styles.navBalanceCurrencyWrap}>
              <div className={styles.navBalanceWrap}>
                <div className={styles.navigation}>
                  <Navigation />
                </div>
                <Route path="/home/currency">
                  <Currency />
                </Route>
                <div className={styles.balance}>
                  <Balance />
                </div>
              </div>
              <Media query="(min-width: 768px)">
                <Currency />
              </Media>
            </div>
            <TableHome />
          </div>
        </div>
      </div>
      <DiagramTab />
    </>
  );
}
