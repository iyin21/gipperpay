
const Input=({control,className, prefixIcon, suffixIcon, error, ...rest})=>{
    return(
        <div
        className={`px-2 md:px-4 w-full flex items-center border border-[rgba(133, 128, 148, 1)] h-12 md:h-14 rounded ${
            error ? "border border-red" : ""
        } ${className}`}
    >
        {prefixIcon}
        <input
            className=" outline-none input bg-transparent"
            {...rest}
            
        />
        {suffixIcon}
    </div>
    )
}

export default Input;