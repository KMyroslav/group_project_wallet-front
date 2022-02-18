import styles from './CurrencyPage.module.scss';

import Media from 'react-media';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Currency from 'components/Currency';
import Navigation from 'components/Navigation';

export default function CurrencyPage() {
  const history = useHistory();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Navigation />
        <div className={styles.currency}>
          <Currency />
        </div>
        <Media
          query="(min-width: 768px)"
          onChange={(matches) => {
            if (matches) {
              history.push('/home');
            }
          }}
        />
      </div>
    </div>
  );
}
