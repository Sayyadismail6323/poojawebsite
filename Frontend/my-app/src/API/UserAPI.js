import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [name,setName] = useState('')
    const [lastname,setLastname]=useState('')
    const [phone,setPhone] =useState('')
    const [email,setEmail]=useState('')
    const [data,setdata] = useState([])
    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                        const res = await axios.get('/user/infor', {
                        headers: {Authorization: token},
                    })
                    try {
                        const res1 = await axios.get('/rem/all', {headers: {Authorization: token}})
                        setdata(res1.data.rem);
                } catch (err) {
                    alert(err.response.data.msg)
                }
                    setName(res.data.user.name)
                    setLastname(res.data.user.lastname)
                    setPhone(res.data.user.phone)
                    setEmail(res.data.user.email)
                    setIsLogged(true)
             

        
             
                } catch (err) {
                  
                    alert(err.response.data.msg)
                }
            }
            getUser()
            
        }
    },[token])
    
    return {
        isLogged: [isLogged, setIsLogged],
        name:[name,setName],
        lastname:[lastname,setLastname],
        phone:[phone,setPhone],
        email:[email,setEmail],
        data:[data,setdata]
    }
}

export default UserAPI
 