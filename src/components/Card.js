import React from "react";
import { Route, Routes } from "react-router-dom"


import sidebar from "../Assets/images/bg-sidebar-desktop.svg"


import Personal_Info from '../components/form-components/Personal_Info';
import Sub_Plan from '../components/form-components/Sub_Plan';
import Add_On from '../components/form-components/Add_On';
import Thank_You from '../components/form-components/Thank_You';


export default function Card(){

    const styles = {
        backgroundImage: `url(${sidebar})`,
      //  backgroundSize: 'auto',
      //  height: "500px"
    }

    return(
        <div className="w-[60rem]  bg-white shadow-slate-900 rounded-2xl">  

            <div className="p-2 flex items-stretch justify-between">
             
               <div  style={styles} className="bg-no-repeat bg-contain h-97 w-72 flex flex-col  items-start px-8 py-9 gap-5">

                    <div className="flex flex-row gap-3">
                            <div className="border-solid border-2 rounded-full self-center w-8 h-8 text-center  text-white font-medium ">
                                1
                            </div>
                            <div className="flex flex-col"> 
                                <div className="text-[12px] leading-none text-gray-300">STEP 1</div>
                                <div className="text-sm font-extrabold text-white">YOUR INFO</div>
                            </div>   
                    </div>

                    <div className="flex flex-row gap-3">
                            <div className="border-solid border-2 rounded-full self-center  w-8 h-8 text-center  text-white font-medium">
                                2
                            </div>
                            <div className="flex flex-col"> 
                                <div className="text-[12px] leading-none text-gray-300">STEP 2</div>
                                <div className="text-base font-extrabold text-white">SELECT PLAN</div>
                            </div>   
                    </div>

                    <div className="flex flex-row gap-3">
                            <div className="border-solid border-2 rounded-full self-center w-8 h-8 text-center text-white font-medium">
                                3
                            </div>
                            <div className="flex flex-col"> 
                                <div className="text-[12px] leading-none text-gray-300">STEP 3</div>
                                <div className="text-base font-extrabold text-white">ADD-ONS</div>
                            </div>   
                    </div>

                    <div className="flex flex-row gap-3">
                            <div className="border-solid border-2 rounded-full self-center w-8 h-8 text-center text-white font-medium">
                                4
                            </div>
                            <div className="flex flex-col"> 
                                <div className="text-[12px] leading-none text-gray-300">STEP 4</div>
                                <div className="text-base font-extrabold text-white">SUMMARY</div>
                            </div>   
                    </div>

               </div>

               <div className=" basis-2/3"> 
                    
                  <Routes>
                    <Route path="/"               element={<Personal_Info />} />
                    <Route path="/Sub_Plan"       element={<Sub_Plan />} />
                    <Route path="/Add_On"         element={<Add_On />} />
                    <Route path="/Thank_You"      element={<Thank_You />} />
                 </Routes>


               </div>
                
            </div>
        </div>
    )
} 