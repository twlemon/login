import background from "./static/background.jpg";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUnlock,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <img src={background} />
      <main className="main">
        <form className="login-form">
          <h2>sign up</h2>
          <p>Log in to get more information.</p>
          <div className="input-group">
            <label htmlFor="account">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              type="text"
              name="account"
              placeholder="account"
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faUnlock} />
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
            />
          </div>
          <label className="remember-group">
            <input
              className="checkbox"
              type="checkbox"
              id="needToRememberAccount"
            />
            <span className="form-check-span" htmlFor="needToRememberAccount">
              <FontAwesomeIcon icon={faCheckSquare} />
              remember me
            </span>
          </label>
          <button>log in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
