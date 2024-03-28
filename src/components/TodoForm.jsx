import "./style.css";

function TodoForm() {
    return (
        <div className="todo-form">
            <h2 class="to-dos__heading">To-Do Form</h2>
            <form class="to-dos__form">
                <label class="to-dos__label">
                Add To Do
                <br />
                <input
                type="text"
                class="to-dos__input"
                id="to-do"
                name="toDo"
                placeholder="Write your to do here.."
                required
                />
            </label>
            <input type="submit" value="Add" class="to-dos__submit-button" />
        </form>
        </div>
    )
}

export default TodoForm;