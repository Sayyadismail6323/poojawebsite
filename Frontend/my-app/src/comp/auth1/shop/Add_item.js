// @flow strict
import * as React from 'react';
import { useState,useContext } from 'react';
import axios  from 'axios';
import { GlobalState } from './Global';
import Button from 'react-bootstrap/Button';


import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'

export default function Add_item(){
    

  const state = useContext(GlobalState)
  const [token] = state.token
    const [name, setname] = useState('')
    const [prize, setprize] = useState('')
    const [N,setN] = useState('')
    const [About, setAbout] = useState('')
    const [remove,setremover] = useState('')
    const [url,seturl] = useState('')
    const handleUpload = async e =>{
        e.preventDefault()
        try {
            const file = e.target.files[0]     
            if(!file) return alert("File not exist.")
            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")
            if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")
            let formData = new FormData()
            formData.append('file', file)
     //       setLoading(true)
            const res = await axios.post('/shopowner/photo', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })
          //  setLoading(false)
          console.log(res.data)
          setremover(res.data.public_id)
          seturl(res.data.url)
          //  setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
       //     setLoading(true)
            await axios.post('/shopowner/destory', {"public_id":remove}, {
                headers: {Authorization: token}
            })
            seturl('')
      //      setLoading(false)
      //      setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    const handleSubmit = async e => {
        console.log(name)

        e.preventDefault()
        try{
          console.log("err")
            await axios.post('/shopowner/add',{name,prize,"about":About,url,N},{   headers: {Authorization: token}});
            window.location.href ="/"
            window.location.href ="/"


        }catch(err)
        {
            //alert(err.response.data.msg)
            alert(err)
            window.location.href ="/"

        }
    
    }

    return (

        // @flow strict

            <div className="container-fluid p-5  text-white text-center bg-info bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>

                    
                    <form className='row text-center align-center' onSubmit={handleSubmit} >


                    <div className="col-md-2"/>




                        <div className='col-sm-12 col-md-8 mb-3 mt-3 mb-3 mt-3 '>
                        <div className="upload">
                        <input type="file" className='form-control' name="file" id="file_up" onChange={handleUpload}/>
                            {url ? <div id="file_img" >< img src={ url } width="400" height={"400"} /><Button onClick={handleDestroy}  variant="danger">Remove this image </Button></div>:<div id="file_img">wait..</div>}
                        </div>
                        </div>
                    <div className="col-md-2"/>
                    <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3 mb-3 mt-3 '>
                             <input for="name" placeholder='Enter Product Name' type="text" className='form-control' value={name} onChange={(e) =>setname(e.target.value)} />
                        </div>
                    
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3 mb-3 mt-3 '>
                             <input for="url" placeholder='Enter Product URL ' type="text" className='form-control' value={url} onChange={(e) =>seturl(e.target.value)} />
                        </div>
                    
                        <div className="col-md-2"/>
                      
                        


                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <textarea  placeholder='About the Product' rows={4}  type="textarea"   className='form-control' value={About} onChange={(e)=>{setAbout(e.target.value)}} />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='Number of Product' type="NUMBER" className='form-control' value={N} onChange={(e)=>{setN(e.target.value)}} />
</div>
<div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='Price Of Product' type="NUMBER" className='form-control' value={prize} onChange={(e)=>{setprize(e.target.value)}} />
</div>
<div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className="col-md-2"/>
                        
                       

<button id="sub_btn" type="submit">Save</button>

                    </form>
                    <p >
                        <Link className='text-white' to={'/Profile'} >No Need</Link>
                    </p>
                    <p></p>
                </div>
            </div>


    );
};

