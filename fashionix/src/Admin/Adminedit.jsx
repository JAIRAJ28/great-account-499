import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Patchit } from '../produadd/action';
import { getAlldata } from '../produadd/action';
let initial={
 
        id: "",
        image:"",
        image2:"",
        color: 6,
        name: "",
        price: ""
        
}

export const EditProduct = () => {
  let dispatch=useDispatch()
  let selector=useSelector((store)=> store)
 console.log(selector)

  const {user_id}=useParams()
  let id=+user_id
  console.log(id)
  let [state,setState]= React.useState("")

//   let product=useSelector((store)=>store.product.data)

const handelChange=(e)=>{
console.log(e.target.name , (e.target.value))
setState((prev)=>{
  return{
    ...prev,
    [e.target.name]:e.target.value
  }
})
}  

useEffect(()=>{
    // let data=product.find((el)=>el.id===id)
    // console.log(data)
    // console.log(id)
    // setState(data)
  },[])




  const handelSubmit=(e)=>{
   e.preventDefault()
   dispatch(Patchit(state,id,dispatch)).then((res)=>{
   dispatch(getAlldata)
   })
  }
  return (
    <DIV>
      Edit Product Number :{id}
    <form action="" onSubmit={handelSubmit}>
    <input type="text" name="name" placeholder='Enter the name' value={state.name} onChange={handelChange} />
    <input type="text" name="title" placeholder='Enter the title' value={state.title} onChange={handelChange}  />
    <input type="number" name="price" placeholder='Enter the Price' value={state.price} onChange={handelChange} />
    <input type="text" name="image" placeholder='Enter the image link' value={state.image} onChange={handelChange} />
    <input type="text" name="category" placeholder='Enter the category' value={state.category} onChange={handelChange} />
    <input type="number" name="discount" placeholder='Enter the discount price' value={state.discount} onChange={handelChange} />
    <select name="gender" value={state.gender} onChange={handelChange}>
        <option value="">Select the Gender</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
    </select>
    <button>ADD</button>
    </form>
</DIV>
  )
}


const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 400px;
  padding: 40px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
    margin-bottom:30px;
  }
  select{
    padding:10px;
    font-size: 20px;
  }
`;