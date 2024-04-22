import "./Message.css";

const Message = ({ msg, type }) => {
  return (
    <div className={`message ${type}`} c>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
