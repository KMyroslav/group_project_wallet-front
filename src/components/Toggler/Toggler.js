import styles from './Toggler.module.scss';

const Toggler = ({ selected, toggleSelected }) => {
  return (
    <div className={styles.container} onClick={toggleSelected}>
      <button className={styles.button}></button>
    </div>
  );
};

export default Toggler;
