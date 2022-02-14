import style from './LoginPage.module.scss';
import image from '../../images/Frame-desktop-login.png';
import greyEllipse from '../../images/Ellipse-grey.png';
import pinkEllipse from '../../images/Ellipse-pink.png';

const LoginPage = () => {
  return (
    <>
      <div className={style.pageContainer}>
        <div className={style.leftSide}>
          <img src={greyEllipse} alt="" className={style.ellipse} />
          <img src={image} alt="" className={style.image} />
          <p className={style.text}>Finance App</p>
        </div>
        <div className={style.rightSide}>
          <img src={pinkEllipse} alt="" className={style.ellipse} />
          <div className={style.loginForm}>
            <h2>Place for Login form</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
