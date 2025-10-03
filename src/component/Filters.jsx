import React,{useState} from "react";

function Filters({setFilters}) {
    const [status,setStatus]= useState("");
    const[priority,setPriority]=useState("");
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("");
    const applyFilters= () =>{
        setFilters({status,priority,search,sort});
    };
    return(
    <div className="filters">
        <input type="text"placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
        <select value={status} onChange={(e)=>setStatus(e.target.value)}>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        </select>
        <select value={priority}onChange={(e)=>setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        </select>
        <select value={sort}onChange={(e)=>setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="date">Due date</option>
        <option value="priority">Priority</option>
<option value="alphabetical">Alphabetical</option>
            </select>
            <button onClick={applyFilters}>Apply</button>
    </div>
    );
}
export default Filters;