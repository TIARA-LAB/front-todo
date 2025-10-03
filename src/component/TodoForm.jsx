import React ,{useState} from "react";

function TodoForm ({addTodo}) {
    const [task,setTask] =useState("");
    const [priority,setPriority]=useState("Low");
    const [dueDate,setDueDate]=useState("");
    const handleSumbit = (e) =>{
        e.preventDefault();
        if (!task.trim())return;
        addTodo({task,priority,dueDate});
        setTask("");
        setPriority("Low");
        setDueDate("");
    };
    return(
        <form onSubmit={handleSumbit}
        className="todo-form">
            <input 
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            />
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}
export default TodoForm;