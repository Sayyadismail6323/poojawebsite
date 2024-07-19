import {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
   const [data,setData] = useState([]);
   const [poojname,setpoojaname] = useState('')
   const [poojaprize,setpoojaprize] = useState('')
   const [poojaurl,setpoojaurl] = useState('')

   const [name,setname]=useState('')
   const [lastname,setlastname]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setphone]=useState(0)
   const [zip,setzip]=useState(0)
     const [sum,SetSum] = useState(0)

  const [age,setage] = useState('')
  const [cart, setCart] = useState([])

  const [add,setadd] = useState('')
    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                        const res = await axios.get('/customer/info', {    headers: {Authorization: token}})
                         setname(res.data.user.name)
                         setlastname(res.data.user.lastname)
                         setEmail(res.data.user.email)
                         setphone(res.data.user.phone)
                         setzip(res.data.user.zip)
                         setadd(res.data.user.add)
                         setage(res.data.user.age)
                         setCart(res.data.user.cart)
                         setData(res.data.products)

                } catch (err) {
                  
                    alert(err.response.data.msg)
                }

            }
            getUser()
            
        }
    },[token])
    const update = async () => {
                await axios.patch('/customer/addcart', {cart}, {
                headers: {Authorization: token}
            })
    }    



    const addCart = async (product) => {

        const check = cart.every(item =>{
            return item._id !== product._id
        })
        if(check){
            product.size =1
            cart.push(product)
            setCart(cart)
            await axios.patch('/customer/addcart', {cart}, {
                headers: {Authorization: token}
            })
            cal_sum()
        }else{
            alert("This product has been added to cart.")
        }
    }
    const  cal_sum = ()=> {
        var new_sum =0
        cart.map((i)=>{
        new_sum = new_sum+i.size*i.prize;
        }) 
  SetSum(new_sum);
}

    return {
        name:[name,setname],
        lastname:[lastname,setlastname],
        phone:[phone,setphone],
        email:[email,setEmail],
        data:[data,setData],
        cart:[cart,setCart],
        addCart:addCart,
        update:update,
        poojaurl:[poojaurl,setpoojaurl],
        cal_sum:cal_sum,
        sum :[sum,SetSum],
        poojname:[poojname,setpoojaname],
        poojaprize:[poojaprize,setpoojaprize],
        zip:[zip,setzip],
        add:[add,setadd],
        age:[age,setage],
    }
}

export default UserAPI
 