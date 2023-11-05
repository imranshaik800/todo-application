import "./input.css"

const Input = (props) => {
  const { InputElement,onDeleteUser } = props;
  const { name ,id} = InputElement;

  const onDelete = () => {
    onDeleteUser(id)
  }
  return (
    <li className="input-container">
      <h1 className="todo-heading">{name}</h1>
      <button onClick={onDelete}className="checkbox-button"type="button">Delete</button>
    
    </li>
  );
};
export default Input;
