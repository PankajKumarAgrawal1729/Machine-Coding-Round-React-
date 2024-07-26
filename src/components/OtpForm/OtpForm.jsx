import { useEffect, useRef, useState } from "react";
import { Container, Input } from "../index";

function OtpForm() {
  const [status, setStatus] = useState(null);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  useEffect(() => {
    let value = otp.join("");
    if (value === "1234") {
      setStatus("verified");
    } else if (value.length == 4 && otp.some((digit) => digit !== "")) {
      setStatus("failed");
    } else {
      setStatus(null);
    }
    // if(value.length == 4 || value.length == 0){
      
    // }
  }, [otp]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (event.target.value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <Container containerStyle={`bg-[#3F72AF]`} headingStyle={`text-[#fff]`}>
      <div className="flex flex-col items-center justify-start rounded-2xl w-[500px] h-[350px] m-auto bg-[#F9F7F7] drop-shadow-[2px_2px_0_rgba(0, 0, 0, 0.25)] p-4 gap-3 mt-5">
        <h1 className="font-sans font-[700] text-[28px] leading-[52px]">
          Mobile Phone Verification
        </h1>
        <div className="max-w-sm mx-auto text-center">
          <p className="font-sans font-[400] text-[17px] leading-[25px] text-[#BFBFBF] break-words">
            Enter the 4-digit verification code that was sent to your phone
            number.
          </p>
        </div>
        <div className="flex justify-center gap-x-2">
          {otp.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>
        <button
          className={`w-[250px] h-[50px] rounded-lg ${
            status === "verified"
              ? "bg-green-500"
              : status === "failed"
              ? "bg-red-500"
              : "bg-[#112D4E]"
          }`}
          type="submit"
        >
          <p className="font-sans tracking-[-4%] leading-[32.55px] text-[20px] font-[400] text-white">
            {status === "verified"
              ? "Verified"
              : status === "failed"
              ? "Verification Failed"
              : "Verify Account"}
          </p>
        </button>
        {status !== "verified" && (
          <div className="flex justify-center font-sans text-[15px] leading-[32.55px] tracking-[-4%] gap-[1px]">
            <p className="font-[200]">Didn’t receive code?</p>
            <button className="font-[400]" type="reset">
              Resend
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}

export default OtpForm;

// import { useState, useRef, useEffect } from "react";
// import { Container, Input } from "../index";

// function OtpForm() {
//   const inputRefs = useRef([]);

  

  

  

//   return (
//     <Container containerStyle={`bg-[#3F72AF]`} headingStyle={`text-[#fff]`}>
//       <div className="flex flex-col items-center justify-start rounded-2xl w-[500px] h-[350px] m-auto bg-[#F9F7F7] drop-shadow-[2px_2px_0_rgba(0, 0, 0, 0.25)] p-4 gap-3 mt-5">
//         <h1 className="font-sans font-[700] text-[28px] leading-[52px]">
//           Mobile Phone Verification
//         </h1>
//         <div className="max-w-sm mx-auto text-center">
//           <p className="font-sans font-[400] text-[17px] leading-[25px] text-[#BFBFBF] break-words">
//             Enter the 4-digit verification code that was sent to your phone
//             number.
//           </p>
//         </div>
//         <div className="flex justify-center gap-x-2">
//           {otp.map((digit, index) => (
//             <Input
//               key={index}
//               ref={(el) => (inputRefs.current[index] = el)}
//               value={digit}
//               onChange={(e) => handleInputChange(index, e)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//             />
//           ))}
//         </div>
//         <button
//           className={`w-[250px] h-[50px] rounded-lg ${
//             status === "verified"
//               ? "bg-green-500"
//               : status === "failed"
//               ? "bg-red-500"
//               : "bg-[#112D4E]"
//           }`}
//           type="submit"
//         >
//           <p className="font-sans tracking-[-4%] leading-[32.55px] text-[20px] font-[400] text-white">
//             {status === "verified"
//               ? "Verified"
//               : status === "failed"
//               ? "Verification Failed"
//               : "Verify Account"}
//           </p>
//         </button>
//         {status !== "verified" && (
//           <div className="flex justify-center font-sans text-[15px] leading-[32.55px] tracking-[-4%] gap-[1px]">
//             <p className="font-[200]">Didn’t receive code?</p>
//             <button className="font-[400]" type="reset">
//               Resend
//             </button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// }

// export default OtpForm;
