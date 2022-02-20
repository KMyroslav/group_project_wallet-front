import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ReactComponent as IconHome } from '../../icons/home.svg';
import { ReactComponent as IconStats } from '../../icons/stats.svg';
import { ReactComponent as IconCurrency } from '../../icons/currency.svg';

export default function Navigation() {
  return (
    <Media query="(max-width: 768px)">
      {(matches) =>
        matches ? (
          <div className={styles.navWrapper}>
            <NavLink
              to="/home"
              className={styles.homeLink}
              activeClassName={styles.active}
            >
              <IconHome className={styles.homeIcon} />
            </NavLink>
            <NavLink
              to="/statistics"
              className={styles.statsLink}
              activeClassName={styles.active}
            >
              <IconStats className={styles.statsIcon} />
            </NavLink>
            <NavLink
              to="/currency"
              className={styles.currencyLink}
              activeClassName={styles.active}
            >
              <IconCurrency className={styles.currencyIcon} />
            </NavLink>
          </div>
        ) : (
          <div className={styles.navWrapper}>
            <NavLink
              to="/home/currency"
              className={styles.homeLink}
              activeClassName={styles.active}
            >
              <IconHome className={styles.homeIcon} /> Главная
            </NavLink>
            <NavLink
              to="/home/statistics"
              className={styles.statsLink}
              activeClassName={styles.active}
            >
              <IconStats className={styles.statsIcon} /> Статистика
            </NavLink>
          </div>
        )
      }
    </Media>
  );
}
