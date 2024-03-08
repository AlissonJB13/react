const UserDetais = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Trabalho: {job}</p>
      {age >= 18 ? <p>Pode Tirar habilitação</p> : <p>Menor de Idade</p>}
    </div>
  );
};

export default UserDetais;
