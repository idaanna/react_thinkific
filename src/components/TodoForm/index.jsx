import { useState } from "react";

    // this submits the form
    // preventDefault stops the HTML to automatically submit
function TodoForm(props) {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (!value) prevents blank entries
        if (!value) {
            return;
        }
        props.addTodo(value);
        setValue("");
    };

    // value={value} clears the form 
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text"
                placeholder="Add Todo..."
                onChange={(event) => setValue(event.target.value)}
                />
        </form>
    );
}

export default TodoForm;