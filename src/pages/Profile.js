import { useEffect, useState} from 'react';
import api from './../common/Api'

import Design from "./Design";

const Profile = () => {

  const [user,setUser] = useState({})
  useEffect(() => {
    (async ()=>{
      try{
        const res=await api.get('users/me');
        const user = res?.data;
        setUser(user);
        console.log(user)
  
      }catch(e){
  
      }
    })();
  }, []);

    return <Design><h1> {user?.email || ''}</h1></Design>;
  };
  
  export default Profile;