import Header from 'components/Header';
import style from './LoginPage.module.scss';
// import image from '../../images/Frame-desktop-login.png';
// import greyEllipse from '../../images/Ellipse-grey.png';
// import pinkEllipse from '../../images/Ellipse-pink.png';

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={style.pageContainer}>
        <p className={style.text}>Finance App</p>
        <div className={style.loginForm}></div>

        {/* <div className={style.leftSide}>
        </div> */}

        {/* <div className={style.rightSide}>
        </div> */}
      </div>
    </>
  );
};

export default LoginPage;
