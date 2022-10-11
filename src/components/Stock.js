import { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdDelete } from "react-icons/md";

const Stock = ({ props, Delstock }) => {



    const [drop, setdrop] = useState(false)

    const { id, name, Tshares, price, mpr, revenue, currentInr, current$ } = props











    return (

        <li className='flex items-center justify-center flex-col text-slate-800 border-2 border-violet-500 my-1 bg-blue-100 rounded'>
            <div className='flex items-center justify-center p-2 '>
                <div className='flex flex-col  lg:mx-2 mx-2 items-center justify-center'>
                    <span>
                        Name:
                    </span>
                    <span className='text-base font-medium text-yellow-600 capitalize'>
                        {name}
                    </span>
                </div>
                <div className='flex flex-col  lg:mx-2 mx-2 items-center justify-center'>
                    <span>
                        TShares:
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {Tshares.toLocaleString('en-IN')}
                    </span>
                </div>
                <div className='flex flex-col  lg:mx-2 mx-2 items-center justify-center'>
                    <span>
                        Price(INR):
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {price.toLocaleString('en-IN')}
                    </span>
                </div>
                <div className='flex flex-col  lg:mx-2 mx-2 items-center justify-center'>
                    <span>
                        M/R:
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {mpr}
                    </span>
                </div>

                <div className='mx-3 cursor-pointer flex justify-center items-center text-black '>
                    <span
                        className='bg-white rounded-full text-red-500 p-1 hover:bg-slate-200'
                        title='delete'
                        onClick={() => Delstock(id)}
                    >
                        <MdDelete />
                    </span>
                    <span
                        title='down'
                        className={`ml-4 bg-white rounded-full p-1 hover:bg-slate-200 ${drop && 'rotate-180'}`}
                        onClick={() => setdrop((prev) => !prev)}
                    >
                        <MdOutlineKeyboardArrowDown />
                    </span>
                </div>
            </div>

            {drop && <div className='flex'>
                <div className='flex flex-col p-2'>
                    <span>
                        RevenueCr(1YR):
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {revenue.toLocaleString('en-IN')}
                    </span>
                </div>
                <div className='flex flex-col p-2'>
                    <span>
                        CMarket(INR):
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {currentInr.toLocaleString('en-IN')}
                    </span>
                </div>
                <div className='flex flex-col p-2'>
                    <span>
                        CMarket($):
                    </span>
                    <span className='text-base font-medium text-yellow-600'>
                        {current$.toLocaleString()}
                    </span>
                </div>

            </div>

            }
        </li>
    )
}

export default Stock