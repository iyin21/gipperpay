import React from "react";

const CustomTextArea = (props) => {
  const { name, value, onChange, cols, rows, placeholder } = props;
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      className="w-full !h-[8.4rem] border border-secondary-20 rounded-[5px] px-5  text-xs text-secondary-30 font-regular leading-5"
    >
      CustomTextArea
    </textarea>
  );
};

export default CustomTextArea;
