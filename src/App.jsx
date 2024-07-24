import "./styles.css"

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input id="item" type="text" />
        </div>
        <button className="btn" type="submit">Add Item</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li className="todo-item">
          <label>
            <input type="checkbox" />
            <span>Item 1</span>
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>

    </>
  )
}
