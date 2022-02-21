import Media from 'react-media';

import styles from './DashBoardPage.module.scss';

import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import TableHome from 'components/TableHome';
import Currency from 'components/Currency';
import Header from 'components/Header';
import { Route, useRouteMatch, useLocation } from 'react-router-dom';
import DiagramTab from '../../components/DiagramTab/DiagramTab';

export default function DashBoardPage() {
  const { url } = useRouteMatch();

  const { pathname } = useLocation();

  return (
    <>
      <div className={styles.blur}>
        <Header />
        <div className="container">
          <div className={styles.navTableWrap}>
            <div className={styles.navBalanceCurrencyWrap}>
              <div className={styles.navBalanceWrap}>
                <div className={styles.navigation}>
                  <Navigation />
                </div>

                <Media
                  queries={{
                    small: '(max-width: 767px)',
                    other: '(min-width: 768px)',
                  }}
                >
                  {(matches) => (
                    <>
                      {matches.small && pathname === '/home/main' && (
                        <div className={styles.balance}>
                          <Balance />
                        </div>
                      )}

                      {matches.other && (
                        <div className={styles.balance}>
                          <Balance />
                        </div>
                      )}
                    </>
                  )}
                </Media>
              </div>

              <Media
                queries={{
                  small: '(max-width: 767px)',
                  other: '(min-width: 768px)',
                }}
              >
                {(matches) => (
                  <>
                    {matches.small && pathname === '/home/currency' && (
                      <Currency />
                    )}

                    {matches.other && <Currency />}
                  </>
                )}
              </Media>
            </div>
            <Route exact path={`${url}/main`}>
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
