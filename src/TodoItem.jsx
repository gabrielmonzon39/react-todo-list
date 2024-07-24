import PropTypes from "prop-types";

export function TodoItem({ id, completed, title, onToggle, onDelete }) {
  // Add 'completed' to props validation
  TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  };
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            onToggle(id, e.target.checked);
          }}
        />
        <span>{title}</span>
      </label>
      <button onClick={() => onDelete(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}
