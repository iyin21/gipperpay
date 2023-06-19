
const StoreASide =({active=1})=>{  
    const steps=[{index:1, title:"Connect a wallet"}, {index:2, title:"Confirm Details"}, {index:3, title:"Make Payment"},]  
    return(
        <div className="lg:w-[20%] hidden lg:block pt-32 pl-10">
            <h5 className="text-secondary-main text-sm font-medium mb-8">Steps</h5>  
            {steps.map((item, index)=>(
                <div key={index} className="flex mb-4 items-center">
                <p className={`${active===index+1 ?"text-whiteText bg-secondary-main":"text-secondary-main bg-secondary-light"} px-2.5 py-1 rounded-[10px]`}>{item.index}</p> 
                <p className="text-secondary-main text-s ml-2">{item.title}</p>   
            </div>
            ))}
                      
        </div> 

    )
}

export default StoreASide;
