/* eslint-disable react/display-name */
import { forwardRef } from "react";


const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      maxLength="1"
       className="bg-[#DBE2EF] font-sans text-center font-[400] text-[25px] text-[#000] w-[60px] h-[60px] rounded-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      {...props}
    />
  );
});

export default Input;