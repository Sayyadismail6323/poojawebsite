import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
   const [data,setData] = useState([]);
   const [name,setname]=useState('')
   const [lastname,setlastname]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setphone]=useState(0)
   const [shopname,setshopname]=useState('')
   const [shopadd,setshopadd]=useState('')
   const [zip,setzip]=useState(0)
  const [age,setage] = useState('')
  const [ gst,setgst] = useState('')
  const [bank ,setbank] = useState('')
  const [ifsc,setifsc] = useState('')
  const [order,setorder] = useState([])
    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                        const res = await axios.get('/shopowner/info', {    headers: {Authorization: token}})
                         setname(res.data.user.name)
                         setlastname(res.data.user.lastname)
                         setEmail(res.data.user.email)
                         setphone(res.data.user.phone)
                         setshopname(res.data.user.shopname)
                         setzip(res.data.user.zip)
                         setshopadd(res.data.user.shopadd)
                     
                       
                         setifsc(res.data.user.ifsc)
                         setbank(res.data.user.bank)
                         setgst(res.data.user.gst)
                         setage(res.data.user.age)
                         setorder(res.data.user.order)


                         try {
                            const res1 = await axios.get('/shopowner/all', {    headers: {Authorization: token}})

                            setData(res1.data.list)
                    } catch (err) {
                        alert(err.response.data.msg)
                    }
                } catch (err) {
                  
                    alert(err.response.data.msg)
                }

            }
            getUser()
            
        }
    },[token])
    return {
        name:[name,setname],
        lastname:[lastname,setlastname],
        phone:[phone,setphone],
        email:[email,setEmail],
        data:[data,setData],
        shopname:[shopname,setshopname],
        shopadd:[shopadd,setshopadd],
        zip:[zip,setzip],
        gst:[gst,setgst],
        bank:[bank,setbank],
        ifsc:[ifsc,setifsc],
       
      
        age:[age,setage],
        order:[order,setorder]


    }
}

export default UserAPI
 