import styles from "./Register.module.css";

import { useEffect, useState } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  //const successMessage = "Usuário cadastrado com sucesso!"

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    const user = {
      userName,
      userEmail,
      userPassword,
    };

    if (userPassword !== userConfirmPassword) {
      setError("As senhas precisam ser iguais");

      return;
    }

    const res = await createUser(user);

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
    <div className={styles.register}>
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="userName"
            required
            placeholder="Nome do usuário"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirmação de senha: </span>
          <input
            type="password"
            name="userConfirmPassword"
            required
            placeholder="Confirme a senha"
            value={userConfirmPassword}
            onChange={(e) => setUserConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
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

export default Register;
