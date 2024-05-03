import styles from "./RegisterPpe.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useAuthValue } from "../../context/AuthContext";

const RegisterPpe = () => {
  const [ppeName, setPpeName] = useState("");
  const [ppeBrand, setPpeBrand] = useState("");
  const [ppeBatch, setPpeBatch] = useState("");
  const [ppeQuantity, setPpeQuantity] = useState(0);
  const [ppeCaNumber, setPpeCaNumber] = useState("");
  const [ppeDescription, setPpeDescription] = useState("");
  const [ppeValidate, setPpeValidate] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("teste-nome");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");

    insertDocument({
      ppeName,
      uid: user,
      registeredBy: user.userName,
    });

    navigate("/");
  };

  return (
    <div className={styles.register_ppe}>
      <h2>Adicionar EPI</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome do EPI</span>
          <input
            type="text"
            name="ppeName"
            required
            placeholder="Insira o nome do EPI"
            value={ppeName}
            onChange={(e) => setPpeName(e.target.value)}
          />
        </label>
        {!response.loading && <button className="btn">Cadastrar Post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default RegisterPpe;
