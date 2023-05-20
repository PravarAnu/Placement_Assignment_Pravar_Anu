import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const ThemeButton = () =>{

    const {theme, setTheme} = useContext(ThemeContext);

    const value = theme === 'light'? 'dark':'light';

    function changeTheme(){
        if(theme === "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }

    return (
        <button onClick={changeTheme}>Change to {value} theme</button>
    )

}


export default ThemeButton;