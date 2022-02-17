import Header from 'components/Header';
import style from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={style.pageContainer}>
        <p className={style.text}>Finance App</p>
        <div className={style.wrap}>
          <LoginForm />
        </div>

        {/* <div className={style.loginForm}>
          <LoginForm />
        </div> */}
      </div>
    </>
  );
};

export default LoginPage;
