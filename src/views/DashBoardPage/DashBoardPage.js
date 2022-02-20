import Media from 'react-media';

import styles from './DashBoardPage.module.scss';

import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import TableHome from 'components/TableHome';
import Currency from 'components/Currency';
import Header from 'components/Header';
import { Route, useRouteMatch } from 'react-router-dom';
import DiagramTab from 'components/DiagramTab/DiagramTab';

export default function DashBoardPage() {
  const { url } = useRouteMatch();

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

                <div className={styles.balance}>
                  <Balance />
                </div>
                <Media query="(min-width: 768px)">
                  <Currency />
                </Media>
              </div>
            </div>
            <Route path={`${url}/currency`}>
              <TableHome />
            </Route>
            <Route path={`${url}/statistics`}>
              <DiagramTab />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}
