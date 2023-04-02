
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";
export const getreq_prod=()=>{
  return{type:GET_PRODUCT_REQUEST}
}
export const getSucc_prod=(payload)=>{
  return{type:GET_PRODUCT_SUCCESS,payload}
}
export const getFailure_prod=()=>{
  return{type:GET_PRODUCT_FAILURE}
}


export const AddProduct=(obj,render)=>(dispatch)=>{
  return axios.post(`https://zoro-to7p.onrender.com/ALL`,obj).then((res)=>{
   return res
  }).catch((err)=>{
    alert(err)
  })
}

export const DeleteProduct=(id)=> (dispatch) =>{
 return axios.delete(`https://zoro-to7p.onrender.com/ALL/${id}`).then((res)=>{
  console.log(res)
 })
}
export const getProducts =(par)=> (dispatch) => {
  dispatch(getreq_prod())
  axios.get(`https://zoro-to7p.onrender.com/ALL`)
  .then((res)=>{
    console.log(res.data);
    dispatch(getSucc_prod(res.data))
  }).catch((err)=>{
    dispatch(getFailure_prod())
  })
};







// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}