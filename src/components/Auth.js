import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import{authactions} from '../Store/index'

const Auth = () => {
 const dispatch= useDispatch();
  const loginhandler=(event)=>{
    event.preventDefault();
    dispatch(authactions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginhandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
