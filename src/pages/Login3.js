import { useNavigate } from "react-router-dom";
import { useState } from "react"
import api from './../common/Api'

export default function Login3(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("onlysubfan")
    const [password, setPassword] = useState("Password123!!");

    const onClickLogin= async ()=>{
        try{
            const res = await api.post(`/auth/login`, { username, password });
            const accessToken = res.data.accessToken;
            if(!accessToken) throw Error("failed");
            

            alert("Login success");
            localStorage.setItem('accessToken', accessToken);
            // navigate("/about_us");

        }catch(e){
            alert("login failed");
        }
        
    }


    return <h1>
        <form>
            <input type="text" placeholder="username" value={username} onChange={event => setUsername(event.target.value)}/>
            <input type="password" placeholder="password" value={password} onChange={event=>setPassword(event.target.value)}/>
            <button type="button" onClick={onClickLogin}>submit</button>
            <p>
                {username} : {password}
            </p>
        </form>
    </h1>
}

