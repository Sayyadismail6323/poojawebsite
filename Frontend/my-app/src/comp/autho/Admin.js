import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
function Admin() {
  const [c,setc] =useState(0)
  const [p,setp] =useState(0)
  const [s,sets] =useState(0)
  const [pr,setpr] =useState(0)


  const k =async()=>{
    try{   
     const res = await axios.get('/customer/admin')
     setc(res.data.c)
     setp(res.data.p)
     setpr(res.data.pr)
     sets(res.data.s)
  }catch(err)
  {
     alert(err.response.data.msg)
  }
   
  }
  k()
  return (
    <div>
         <h1 className='text-center '>Admin Profile</h1>
    <Table striped bordered hover variant="warning">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Number of Item</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Customer</td>
          <td> {c}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shopkeeper</td>
          <td> {s}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Priest</td>
          <td> {p}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Product</td>
          <td> {pr}</td>
        </tr>
      </tbody>
    </Table>
</div>
  );
}
export default Admin;