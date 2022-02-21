import style from './LoginPage.module.scss';
import LoginForm from '../../components/LoginForm';
import Media from 'react-media';
import LoginLogo from '../../images/Frame-desktop-login.png';

const LoginPage = () => {
  return (
    <div className={style.pageWrapper}>
      <div className={`container ${style.overflow}`}>
        <div className={style.mainWrapper}>
          <Media query="(min-width: 768px)">
            <div className={style.logoWrapper}>
              <img
                src={LoginLogo}
                alt="finance app logo"
                className={style.logo}
              />
              <p className={style.text}>Finance App</p>
            </div>
          </Media>

          <div className={style.formWrapper}>
            <LoginForm />
            <div className={style.blur}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
