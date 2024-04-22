import styles from "./RegisterPpe.module.css";

// hooks
import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

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

  const { insertDocument, response } = useInsertDocument();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    const document = {
      ppeName,
      ppeBrand,
      ppeBatch,
      ppeCaNumber,
      ppeQuantity,
      ppeValidate,
      ppeDescription,
      uid: user.uid,
      registeredBy: user.userName,
    };

    console.log(document);

    insertDocument(document);
  };

  return (
    <div className={styles.register_ppe}>
      <h2>Adicionar EPI</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="ppeName"
            required
            placeholder="Insira o nome do EPI"
            onChange={(e) => setPpeName(e.target.value)}
            value={ppeName}
          />
        </label>
        <label>
          <span>Marca:</span>
          <input
            type="text"
            name="ppeBrand"
            required
            placeholder="Insira a marca do EPI"
            onChange={(e) => setPpeBrand(e.target.value)}
            value={ppeBrand}
          />
        </label>
        <label>
          <span>N° do CA:</span>
          <input
            type="text"
            name="ppeCaNumber"
            required
            placeholder="Insira o CA do EPI"
            onChange={(e) => setPpeCaNumber(e.target.value)}
            value={ppeCaNumber}
          />
        </label>
        <label>
          <span>Lote:</span>
          <input
            type="text"
            name="ppeBatch"
            required
            placeholder="Insira o lote do EPI"
            onChange={(e) => setPpeBatch(e.target.value)}
            value={ppeBatch}
          />
        </label>
        <label>
          <span>Quantidade:</span>
          <input
            type="number"
            name="ppeQuantity"
            required
            onChange={(e) => setPpeQuantity(e.target.value)}
            value={ppeQuantity}
          />
        </label>
        <label>
          <span>Validade:</span>
          <input
            type="date"
            required
            onChange={(e) => setPpeValidate(e.target.value)}
            value={ppeValidate}
          />
        </label>
        <label>
          <span>Descrição:</span>
          <input
            type="text"
            name="ppeDescription"
            required
            placeholder="Insira a descrição do EPI"
            onChange={(e) => setPpeDescription(e.target.value)}
            value={ppeDescription}
          />
        </label>
        {!response.loading && <button className="btn">Adicionar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default RegisterPpe;
