import React from "react";

function ThemeToggle({theme,setTheme}){
    return(
        <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            {theme === "light" ? "Dark Mode":"Light Mode"}
        </button>
    );
}

export default ThemeToggle;