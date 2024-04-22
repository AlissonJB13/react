import styles from "./Login.module.css";

import { useEffect, useState } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  //const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  //const successMessage = "Usuário cadastrado com sucesso!"

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setSuccess("");
    setError("");

    const user = {
      userEmail,
      userPassword,
    };

    const res = await login(user);

    console.log(res);

    {
      /*setUserName("");
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPassword("");*/
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  //setSuccess("Usuário cadastrado com sucesso");

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="userEmail"
            required
            placeholder="E-mail do usuário"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="userPassword"
            required
            placeholder="Senha"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
        {/*{success && <p className="success">{success}</p>}*/}
      </form>
    </div>
  );
};

export default Login;
