import React from "react";
import { Link } from "react-router-dom";

import {Form_footer_button} from "../HOC/Form_footer_buttton"


function Personal_Info(){

    return(
        <div>
            
          {/*--------------------------Heading------------------------------*/}

            <div>
                <div className="text-3xl font-bold text-blue-950 leading-normal">
                    Personal info
                </div>
                <div className="text-base text-gray-400 font-medium">
                    Please provide your name, email address, and phone number.
                </div>
            </div>
            
            {/*--------------------------Input form------------------------------*/} 

            <div className=" mt-10 flex flex-col gap-4">

                <div>
                    <label className=" text-sm font-medium text-blue-950 pl-1">
                        Name
                    </label><br/>
                    <input 
                    className=" h-12 border-solid border-2 border-gray-300 w-[32rem] mt-1 rounded-lg p-3 font-semibold text-blue-950" 
                    type="text"
                    placeholder="e.g. Stephen King"></input>
                </div>

                <div>
                    <label className=" text-sm font-medium text-blue-950 pl-1">
                        Email Address
                    </label><br/>
                    <input 
                    className=" h-12 border-solid border-2 border-gray-300 w-[32rem] mt-1 rounded-lg p-3 font-semibold text-blue-950" 
                    type="text"
                    placeholder="e.g. stephenking@lorem.com"></input>
                </div>

                <div>
                    <label className=" text-sm font-medium text-blue-950 pl-1">
                        Phone number
                    </label><br/>
                    <input 
                    className=" h-12 border-solid border-2 border-gray-300 w-[32rem] mt-1 rounded-lg p-3 font-semibold text-blue-950"
                    type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="e.g. +1 234 567 890"></input>
                </div>

            </div>

             {/*--------------------------Submit button------------------------------*/} 

             {/* <div className="flex flex-row-reverse">
                <Link to="/Sub_Plan" >
                    <button className=" border-none bg-blue-950 text-white hover:bg-blue-800 mt-16 p-2 w-28 rounded-lg">
                        Next Step
                    </button>
                </Link>    
             </div> */}
        </div>
    )
}

export default Form_footer_button(Personal_Info , { Next_link: "/Sub_Plan" , Prev_link: ""  })