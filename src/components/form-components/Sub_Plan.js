import React from "react"
import { Link } from "react-router-dom";


import Arcade_img from "../../Assets/images/icon-arcade.svg"
import Advance_img from "../../Assets/images/icon-advanced.svg"
import Pro_img from "../../Assets/images/icon-pro.svg"

import {Form_footer_button} from "../HOC/Form_footer_buttton"

 function Sub_Plan(){

    return(
        <div>
            
        {/*--------------------------Heading------------------------------*/}

          <div>
              <div className="text-3xl font-bold text-blue-950 leading-normal">
                  Select your plan
              </div>
              <div className="text-base text-gray-400 font-medium">
                  You have the option of monthly or yearly billing.
              </div>
          </div>
          
          {/*--------------------------Plans-option ------------------------------*/} 

          <div className=" mt-10 flex flex-col gap-6">

            {/*--------------------------Plans-box ------------------------------*/} 

            <div className="flex cursor-pointer justify-between gap-10">

                <div className="flex flex-col justify-between border-inherit border-2 border-gray-300 hover:border-blue-950 hover:bg-blue-50 rounded-lg  w-36  h-40">
                    <img src={Arcade_img} alt="Arcade-img" className=" w-10 mt-4 ml-4 mr-16" />
                    <div className="ml-4 flex flex-col mt-7 mb-3 ">
                        <label className=" text-b-base font-bold text-blue-950">Arcade</label>
                        <label className="text-xs font-semibold text-gray-400 pt-1">$9/mo</label>
                     </div>
                </div>

                <div className="flex flex-col justify-between border-inherit border-2 border-gray-300 hover:border-blue-950  hover:bg-blue-50 rounded-lg w-36 h-40">
                    <img src={Advance_img} alt="Advance_img" className=" w-10 mt-4 ml-4 mr-16" />
                    <div className="ml-4 flex flex-col mt-7 mb-3">
                        <label className=" text-base font-bold text-blue-950">Advance</label>
                        <label className="text-xs font-semibold text-gray-400 pt-1">$12/mo</label>
                     </div>
                </div>

                <div className="flex flex-col justify-between border-inherit border-2 border-gray-300 hover:border-blue-950  hover:bg-blue-50 rounded-lg w-36 h-40">
                    <img src={Pro_img} alt="Pro_img" className=" w-10 mt-4 ml-4 mr-16" />
                    <div className="ml-4 flex flex-col mt-7 mb-3">
                        <label className=" text-base font-bold text-blue-950">Pro</label>
                        <label className="text-xs font-semibold text-gray-400 pt-1">$15/mo</label>
                     </div>
                </div>

            </div>

                {/*--------------------------Sub-Toogle ------------------------------*/} 

             <div className=" bg-gray-100 flex items-center justify-center p-2">
                <div className="flex gap-5">
                    <label className="text-sm font-bold text-gray-500">Monthly</label>
                    <label>Toogle</label>
                    <label className="text-sm font-bold text-gray-500">Yearly</label>
                </div>
             </div>

          </div>

           {/*--------------------------Submit button------------------------------*/} 
{/* 
           <div className="flex flex-row justify-between mt-16">
              
              <Link to="/">
                <button className="mt-16 p-2 w-28 font-semibold text-gray-500 hover:text-blue-950">
                    Go Back
                </button>
              </Link>  
            
              <Link to="/Add_On" >
                <button className=" border-none bg-blue-950 text-white hover:bg-blue-800 mt-16 p-2 w-28 rounded-lg">
                    Next Step
                </button>
              </Link>  
           </div> */}
      </div>
    )
}

export default Form_footer_button(Sub_Plan , {Next_link: "/Add_On" , Prev_link :"/"})