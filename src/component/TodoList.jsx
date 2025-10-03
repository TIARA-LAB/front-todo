import React, { useState } from "react";

function TodoList({todos,toggleTodo, deleteTodo,editTodo}) {
 const [editingId,setEditingId]=useState(null);
 const [editTask,setEditTask]=useState("");

 const handleEdit =(todo) => {
    setEditingId(todo._id);
    setEditTask(todo._id);
 };

 const saveEdit = (id) => {
    editTodo(id,{task:editTask});
    setEditingId(null);
    setEditTask("");
 };


 return(
    <ul className="todo-list">
       {todos.map((t)=>
    (
     <li key={t._id}
     className={t.completed ? "completed": ""}>
        {editingId===t._id ? (
            <>
          <input value={editTask}  
          onChange={(e)=>
            setEditTask(e.target.value)} />
            <button onClick={()=>
        saveEdit(t._id)}>Save</button>
            </>
        ):(
            <>
            <span onClick={()=>
        toggleTodo(t._id)}>
        {t.task}
        <small>({t.priority})</small> {t.duedate && `$$new Date(t.dueDate).toLocalDateString()}`}
        </span>
            <button onclick = {()=>handleEdit(t)}>Edit</button>
            <button onClick={()=>deleteTodo(t._id)}>Delete</button>
            </>
        )}
        </li>
    ))}
    </ul>
 );
}
   

export default TodoList;