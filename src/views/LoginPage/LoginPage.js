import style from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <div className={style.pageContainer}>
        <p className={style.text}>Finance App</p>
        <div className={style.wrap}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
