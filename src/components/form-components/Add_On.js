import React from "react"

import Arcade_img from "../../Assets/images/icon-arcade.svg"
import Advance_img from "../../Assets/images/icon-advanced.svg"
import Pro_img from "../../Assets/images/icon-pro.svg"
import { Link } from "react-router-dom"

import {Form_footer_button} from "../HOC/Form_footer_buttton";


function Add_On(){

    return(
        <div>
            
        {/*--------------------------Heading------------------------------*/}

          <div>
              <div className="text-3xl font-bold text-blue-950 leading-normal">
                  Pick add-ons
              </div>
              <div className="text-base text-gray-400 font-medium">
                  Add-ons help enhance your gaming experience.
              </div>
          </div>
          
          {/*--------------------------Add On-option ------------------------------*/} 

          <div className=" mt-10 mb-10 flex flex-col gap-4 ">

            <div className=" w-[32rem] flex justify-between px-7 py-4 rounded-lg border-solid border-2 border-gray-300 hover:border-blue-950  hover:bg-blue-50 ">

               <div className="flex">
                    <div className=" self-center">
                        <input type="checkbox" className="w-4 h-4"/>
                    </div>

                    <div className="flex flex-col ml-7">
                        <label className=" text-blue-950 text-base font-bold">
                            Online service
                        </label>      
                        <label className=" text-sm text-gray-400 font-medium">
                            Access to multiplayer games
                        </label>
                    </div>
               </div> 

                <div className="self-center font-normal text-base text-blue-800">
                    +$1/mo
                </div>

            </div>

            <div className=" w-[32rem] flex justify-between px-7 py-4 rounded-lg border-solid border-2 border-gray-300 hover:border-blue-950  hover:bg-blue-50 ">

               <div className="flex">
                    <div className=" self-center">
                        <input type="checkbox" className="w-4 h-4"/>
                    </div>

                    <div className="flex flex-col ml-7">
                        <label className=" text-blue-950 text-base font-bold">
                            Larger storage
                        </label>      
                        <label className=" text-sm text-gray-400 font-medium">
                            Extra 1TB of cloud save
                        </label>
                    </div>
               </div> 

                <div className="self-center font-normal text-base text-blue-800">
                    +$2/mo
                </div>

            </div>

            <div className=" w-[32rem] flex justify-between px-7 py-4 rounded-lg border-solid border-2 border-gray-300 hover:border-blue-950  hover:bg-blue-50 ">

               <div className="flex">
                    <div className=" self-center">
                        <input type="checkbox" className="w-4 h-4"/>
                    </div>

                    <div className="flex flex-col ml-7">
                        <label className=" text-blue-950 text-base font-bold">
                            Customizable Profile
                        </label>      
                        <label className=" text-sm text-gray-400 font-medium">
                            Custom theme on your profile
                        </label>
                    </div>
               </div> 

                <div className="self-center font-normal text-base text-blue-800">
                    +$2/mo
                </div>

            </div>
           

          </div>
{/* 
           --------------------------Submit button------------------------------ 

           <div className="flex flex-row justify-between mt-5">

              <Link to="/Sub_Plan" > 
                <button className="mt-16 p-2 w-28 font-semibold text-gray-500 hover:text-blue-950">
                    Go Back
                </button>
              </Link>   

              <Link to="/Thank_You" >
                <button className=" border-none bg-blue-950 text-white hover:bg-blue-800 mt-16 p-2 w-28 rounded-lg">
                    Next Step
                </button>
              </Link> 

           </div> */}
      </div>
    )
}

export default Form_footer_button(Add_On , { Next_link: "/Thank_You" , Prev_link: "/Sub_Plan" })