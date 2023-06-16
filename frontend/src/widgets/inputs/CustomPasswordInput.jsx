import React, { useState } from "react";
import { FiLock, FiUnlock, FiEye, FiEyeOff } from "react-icons/fi";

function CustomPasswordInput({ values, handleChange, handleBlur }) {
  const [showpassword, setShowPassword] = useState(false);
  const inputType = showpassword ? "text" : "password";
  return (
    <div className=" px-[1.25rem] w-full h-full flex flex-row items-center ">
      {showpassword ? <FiUnlock /> : <FiLock />}
      <input
        type={inputType}
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="**********"
        className="h-full w-full py-[1.1rem] pl-3 bg-transparent text-white-30 placeholder:text-white-30 "
      />
      <div onClick={() => setShowPassword(!showpassword)}>
        {showpassword ? <FiEyeOff /> : <FiEye />}
      </div>
    </div>
  );
}

export default CustomPasswordInput;
