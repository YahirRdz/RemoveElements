import React from 'react'

const Results = ({number}) => {
    console.log("number",number)
  return (
    <div className="flex flex-col justify-center items-start gap-6 w-full sm:pt-28 md:pt-0"> 
        {!number.length ? (
            <div className='grid grid-cols-3xs grid-rows-4xs lg:grid-cols-4 xl:grid-cols-5  2xl:grid-rows-4 2xl:grid-cols-6 items-center w-full p-6 sm:p-12 sm:gap-8 gap-x-5 gap-y-2.5 xss:gap-x-12 xss:gap-y-4 xs:gap-6 lg:gap-x-8 lg:gap-y-4 grid-flow-row-dense bg-slate-50 border-dashed border border-slate-600 rounded-3xl sm:h-[744px]'>
            </div>
        ) : (
            <div className='grid grid-cols-3xs grid-rows-4xs lg:grid-cols-4 xl:grid-cols-5  2xl:grid-rows-4 2xl:grid-cols-6 items-center w-full p-6 sm:p-12 sm:gap-8 gap-x-5 gap-y-2.5 xss:gap-x-12 xss:gap-y-4 xs:gap-6 lg:gap-x-8 lg:gap-y-4 grid-flow-row-dense bg-green-50 border-dashed border border-green-600 rounded-3xl sm:h-[744px]'>
            {number.map((num, key)=>{
                return(
                    <div key={key} className="w-full h-full"> 
                        <div className='flex flex-col  text-white text-[32px] justify-center items-center p-4 gap-2.5 shadow-3xl bg-emerald-600 w-full h-full rounded-2xl'>{num}</div>
                    </div>
                );
            })}
        </div>  
        )}
    </div>  
  )
}; 

export default Results