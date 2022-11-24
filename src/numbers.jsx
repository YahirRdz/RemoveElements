import { useEffect, useState } from "react";
import Results from "./Results";
import arrow from "./icon/arrow.svg";

const numbers = () => {
    const [number, setNumber] = useState("");
    const [removenum, setRemovenum] = useState("");
    const [arrayNum, setarrayNum] = useState([]);
    const [isVisible, setisVisible] = useState(true);
    const [isRemove, setisRemove] = useState(false);

    function clearForm(arrayNum){
        setNumber("");
        // setarrayNum([]);
        setisVisible(false);
    }
    const handleClick = e => {
        setisVisible(true);
    }
    // useEffect(() => {
    //     if(isRemove2){
    //         arrayNum.splice(removenum,1);
    //         setarrayNum([...arrayNum])
    //     }
    // },[isRemove2]);
    function removeElement(e){
        e.preventDefault();
        let dupArray = arrayNum;
        dupArray.splice(removenum,1);
        console.log("dupArray",dupArray)
            setarrayNum(dupArray)
        //remove element from array by element value
        // let arr = arrayNum;
        // const N = removenum
        // console.log("arreglo antes",arr);
        // let val = arr.indexOf(parseInt(N));-
        // arr.splice(val,1);
        // setarrayNum([...arr])
    }
    // console.log(arrayNum,"arrayNum")

     function madeArray(e){
        
        e.preventDefault();
        // handleClick();
        setisVisible(false)
        setisRemove(true)
        const N = number;
        const array = Array.apply(null, {length:N}).map(Number.call, Number);
        setarrayNum(array);
    }
    
  return (
    <div className="flex flex-col items-start gap-14 w-full h-[996px]">
        <div className="h-screen flex flex-col items-start gap-7 md:gap-14 w-full">
            <div className="flex gap-2">
                <img src={arrow} alt="arrow" /> 
                <p className='text-base'>Go Back</p>
            </div>
            <div className='flex flex-col items-start w-full gap-14 mb-48 sm:mb-0'>
                <h2 className="text-2xl text-gray-800 font-medium"><span className="font-extrabold">Task:</span>Enter index to remove/delete box in the given grid.</h2>
                <form
                id="form"
                className="flex flex-col items-start gap-5 md:items-end w-full md:flex-row justify-between h-[76px]"
                onSubmit={(e)=>{
                    isVisible
                    ?
                    madeArray(e)
                    :
                    removeElement(e)   
                }}

                >
                    {
                        isVisible ?
                        <div className="flex flex-col gap-8 w-full items-end  md:items-end sm:flex-row md:gap-5">
                        <label htmlFor="" className="flex flex-col gap-3 text-gray-600 w-full md:w-[360px]">
                            Enter number
                            <input 
                            type="number"
                            className="flex items-start p-4 gap-2.5 w-full bg-white rounded-md border-solid border border-gray-200 "
                            id="number"
                            value={number}
                            placeholder="Enter number to generate grid"
                            onChange = {(e) => setNumber(e.target.value)}
                            />
                        </label>
                        <button className="flex items-start px-8 py-4 justify-center w-full sm:w-[119px] capitalize bg-cyan-600 rounded-md text-white"> submit </button>
                    </div>:
                            <div className="flex flex-col gap-8 w-full items-end  md:items-end sm:flex-row md:gap-5">
                                <label  className="flex flex-col text-gray-800 gap-3 w-full md:w-[360px]">
                                    Remove numbers
                                    <input 
                                    type="number"
                                    className="flex items-start p-4 gap-2.5 w-full bg-white rounded-md border-solid border border-gray-200"
                                    id="removenum"
                                    value={removenum}
                                    placeholder="Enter index to remove the box"
                                    onChange = {(e) =>{ setRemovenum(e.target.value)
                                    }}
                                    />
                                </label>
                                <button 
                                
                                className="flex items-start px-8 py-4 justify-center w-full sm:w-[119px] capitalize bg-cyan-600  rounded-sm text-white"> 
                                Remove </button>
                            </div>
                            }
                    { isRemove &&
                    <div className="w-full sm:w-[119px] flex justify-center md:justify-end">
                        <button 
                        onClick={clearForm}
                        className={`flex items-start px-8 py-4 capitalize justify-center w-full sm:w-[119px] bg-white border-solid border border-blue-600 rounded-md text-blue-600`}>
                            reset
                        </button>
                    </div>
                    }
                </form>
          </div>

                <Results number={arrayNum}/>
        </div>
    </div>
  )
}

export default numbers