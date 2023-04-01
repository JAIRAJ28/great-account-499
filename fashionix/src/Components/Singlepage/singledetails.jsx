import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./singledata.css"
import { BsPlusLg } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductAddToCart from './SingleProductall';

const Moredetails = () => {
let [state1,setState1]=useState(false)
let [state2,setState2]=useState(false)
let [data,setData]=useState({
    image:"",
    image2:"",
    name:"",
    price:""
})
let [smallprod,setSmallProd]=useState([]);



useEffect(()=>{
  axios.get("https://zoro-to7p.onrender.com/Linen_data/800").then((res)=>{
    setData({...data,image:res.data.image,image2:res.data.image2,name:res.data.name,price:res.data.price})
  })
  axios.get("https://zoro-to7p.onrender.com/SMALLDATASINGLEPAGE").then(res=>setSmallProd(res.data))
  AOS.init();
},[])

console.log(smallprod)

const handelEchangedis =()=>{
    setState2(!state2)
}
  return (
    <div className='mainsingleDiv'>
    <div 
   className="main2nd"
    >
    <div 
    className="singleleftInfo"
   
    >
        <div 
  
        > <h4>COMPOSITION, CARE & ORIGIN
        <BsPlusLg 
        onClick={()=>{
            setState1(!state1)
        }}
        /></h4> 
        
        </div>
       
      <div>
         <div className="trueAndfalse1"
         style={state1?{display:""}:{display:"none"}}
         >
      <h4>Shipping Exchange</h4>
       <div>
        <h5>
        SHIPPING
        </h5>
        <p>SHIPPING TO A ZARA STORE - FREE</p>
        <p>Delivery in 3-5 working days.</p>
        <h5 
         style={{
            fontSize:"14px",
            marginBottom:"20px"
        }}
        >HOME DELIVERY</h5>
            
        <ul>
            <li style={{
                fontSize:"14px"
            }}>Delivery in 2-8 working days - ₹ 290.00
         Shipping will be free <br /> if your order includes  non-discounted items <br /> worth over ₹ 2,990.
         </li>
        </ul>
        <hr />
 </div>
        </div>
        <h4> EXCHANGES AND RETURNS <BsPlusLg
        onClick={handelEchangedis}
        
        /></h4>


        <div className="trueAndfalse2"
           style={state2?{display:""}:{display:"none"}}
        >
        <p 
         style={{
                fontSize:"14px",
                marginBottom:"30px"
            }}
        >You have 30 days from the shipping date to return your purchase from Zara.com.</p>

        <h5>RETURNS TO A ZARA STORE - FREE</h5>
        <h5
              style={{
           
                marginTop:"20px"
            }}
        >HOME COLLECTION - ₹ 100</h5>
        <p
                 style={{
                    fontSize:"14px",
                    marginTop:"20px"
                }}
        >The cost of the return applies to each request and will be deducted from the refund amount.</p>
        <p
           style={{
            fontSize:"14px",
            
        }}
        >For more information, we suggest you go to the Help section.</p>
        </div>

    
      </div>
    </div>



    <div className='singledisplay'
    data-aos="fade-down"
    >
      <img className='singledisplayimg' src={data.image} alt="" />
      <br />
      <img className='singledisplayimg' src={data.image2} alt="" />
    </div>
    
    
    
    
    
    <div className="singledetailsRight">
        <div className='singledetailsRight2'>
      <h3>{data.name}</h3>
      <h5>₹ {data.price}</h5>
       <p 
        style={{
            fontSize:"12px",
            
        }}
       >MRP incl. of all taxes</p>

       <h3>Style on top.</h3>
       <h6>MULTICOLOURED | 2971/210</h6>

       <hr />
      <select 
      style={{
        height:"50px",
        padding:"10px",
        
      }}
      > 
     
        <option  value="XL">XL</option>
        <option  value="L">L</option>
        <option  value="M">M</option>
        <option  value="S">S</option>
        <option  value="XS">XS</option>
      </select>
       <hr />

    <p
     style={{
        fontSize:"12px",
        
    }}
    >FIND YOUR SIZE-----------SIZE GUIDE</p>
    <button 
     style={{
     width:"100%",
     padding:"15px",
     background:"white" ,
     marginTop:"20px"       
    }}
    >ADD TO BAG</button>

    <p 
     style={{
        fontSize:"12px",  
        marginTop:"30px" 
    }}
    >CHECK IN-STORE AVAILABILITY</p>
    <p 
      style={{
        fontSize:"12px",  
        marginTop:"30px" 
    }}
    >DELIVERY, EXCHANGES AND RETURNS</p>

    <p 
          style={{
            fontSize:"11px", 
            marginTop:"30px" 
        }}
    >The “Check in-store availability” option is temporarily unavailable.</p>
    </div>
    </div>
    </div>



    <div className="productsmall">
    {smallprod?.map((item)=>(
      <ProductAddToCart
   image={item.image}
   name={item.name}
   price={item.price}
   />
    ))}
   
   </div>
    </div>
  )
}

export default Moredetails