import React from "react";

import thank_you_icon from "../../Assets/images/icon-thank-you.svg"

export default function Thank_You(){

    return(
        <div className="w-[34rem] flex flex-col items-center justify-center h-full px-12 ">
            
            {/* <div>
              <div className="text-3xl font-bold text-blue-950 leading-normal">
                  Select your plan
              </div>
              <div className="text-base text-gray-400 font-medium">
                  You have the option of monthly or yearly billing.
              </div>
          </div> */}
          <div className="flex flex-col justify-center items-center gap-5">
              <div>
                <img src={thank_you_icon} alt="thank_you_icon" />
              </div>

              <div className="text-3xl font-bold text-blue-950">
                Thank you!
              </div>

              <div className=" text-base text-gray-400 text-center leading-snug">
              Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
              </div>
          </div>
        
        </div>
    )
}