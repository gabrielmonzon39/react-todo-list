import { TodoItem } from "./TodoItem";

export function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="list">
      {todos.length === 0 && <li className="todo-item">No items</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
}
