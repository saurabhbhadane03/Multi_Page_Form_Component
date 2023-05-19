import React from "react";
import { Link } from "react-router-dom";

export function Form_footer_button(Component , Page ){
   // const Component = component

    return function(){
        
       return (
      <div className="flex-col items-center px-20 pt-10">  
        <Component />

        <div className="flex flex-row justify-between mt-8 h-max">

              <Link to={Page.Prev_link}>
                <button className={`mt-16 p-2 w-28 font-semibold text-gray-500 hover:text-blue-950 ${Page.Prev_link ? 'disabled:opacity-50' : ''}`} disabled={!Page.Prev_link}>
                     { Page.Prev_link ? "Go Back" : ""}
                </button>
              </Link>  
            
              <Link to= {Page.Next_link} >
                <button className=" border-none bg-blue-950 text-white hover:bg-blue-800 mt-16 p-2 w-28 rounded-lg">
                    Next Step
                </button>
              </Link>  
           </div> 
      </div>         
    )
  }
}