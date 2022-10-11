import { useState, useEffect } from "react"
import AddStock from "./AddStock"


const getStocks = () => {

    let list = localStorage.getItem('list')

    if (list)
        return JSON.parse(list);

    return [];
}






const Home = () => {


    const [totalShares, setTotalShares] = useState('')
    const [sharePrice, setSharePrice] = useState('')
    const [dollar, setDollar] = useState(81.2)
    const [revenue, setrevenue] = useState('')
    const [StockName, setStockName] = useState('')

    const [value, setValue] = useState(0)
    const [error, seterror] = useState(false)


    const [stock, setstock] = useState(getStocks())





    useEffect(() => {

        localStorage.setItem('list', JSON.stringify(stock))

    }, [stock])

    const clearall = () => {

        setSharePrice('')
        setStockName('')
        setTotalShares('')
        setValue('')
        setrevenue('')
        seterror(false)

    }
    const reset = (e) => {
        e.preventDefault()
        clearall()
    }



    const marketValue = (e) => {
        e.preventDefault()

        if (!totalShares || !sharePrice || !dollar || !revenue || !StockName) {
            seterror(true)
            return
        }

        const value = totalShares * sharePrice

        setValue(value)
        seterror(false)
        setstock([
            {
                id: Date.now(),
                name: StockName,
                price: sharePrice,
                Tshares: totalShares,
                mpr: Math.round(value / (revenue * Math.pow(10, 7))),
                revenue: revenue,
                currentInr: value,
                current$: Math.round(value / dollar),
                dollar: dollar



            }
            , ...stock])

        console.log(stock)
        clearall()

    }




    return (
        <div className=" font-mono flex flex-col justify-center items-center overflow-auto ">


            <div className="lg:flex justify-center items-center">


                <div className=' border-blue-300 border-2 lg:p-2 p-2 lg:m-4 bg-slate-100'>

                    {error && <span className="text-red-500 font-medium">Enter all Fields</span>}
                    
                    <form className=" flex flex-col justify-center items-center">

                        <div className="">

                            <div className='lg:mx-2 my-2 flex flex-col'>
                                <span className="font-medium">Stock Name :</span>
                                <input
                                    placeholder="Adani..."
                                    className={`px-2 h-10 w-72 rounded outline-none ${!error && 'focus:border-sky-600'} border-2 ${error && 'border-red-400'}`}
                                    type="text"
                                    onChange={(e) => setStockName(e.target.value)}
                                    value={StockName}

                                />
                            </div>

                            <div className='lg:m-2 flex flex-col '>
                                <span className="font-medium">Total shares :</span>
                                <input

                                    className={`px-2 h-10 w-72 rounded outline-none ${!error && 'focus:border-sky-600'} border-2 ${error && 'border-red-400'}`}
                                    type="number"
                                    min='0'
                                    placeholder='Total Shares'
                                    value={totalShares}
                                    onChange={(e) => setTotalShares(e.target.value)}
                                />
                            </div>
                            <div className='lg:m-2 flex flex-col'>
                                <span className="font-medium">Share Price INR :</span>
                                <input

                                    className={`px-2 h-10 w-72 rounded outline-none ${!error && 'focus:border-sky-600'} border-2 ${error && 'border-red-400'}`}
                                    type="number"
                                    min='0'
                                    placeholder='Share Price'
                                    value={sharePrice}
                                    onChange={(e) => setSharePrice(e.target.value)}
                                />
                            </div>
                            <div className='lg:m-2 flex flex-col'>
                                <span className="font-medium">1 Dollar Value In INR :</span>
                                <input

                                    className={`px-2 h-10 w-72 rounded outline-none ${!error && 'focus:border-sky-600'} border-2 ${error && 'border-red-400'}`}
                                    type="number"
                                    min='0'
                                    placeholder='Share Price'
                                    value={dollar}
                                    onChange={(e) => setDollar(e.target.value)}
                                />
                            </div>

                            <div className='lg:m-2 flex flex-col'>
                                <span className="font-medium">Revenue in LastYear in Cr :</span>
                                <input

                                    className={`px-2 h-10 w-72 rounded outline-none ${!error && 'focus:border-sky-600'} border-2 ${error && 'border-red-400'}`}
                                    type="number"
                                    min='0'
                                    placeholder='Revenue'
                                    value={revenue}
                                    onChange={(e) => setrevenue(e.target.value)}
                                />
                            </div>

                        </div>

                        <div>
                            <input className="my-5 h-8 px-3 text-white bg-green-500 rounded " type="submit" onClick={marketValue} />

                            <button
                                className="mx-3 bg-rose-500 px-3 py-1 rounded text-white"
                                onClick={reset}>
                                Reset
                            </button>
                        </div>

                    </form>

                    <span className="font-medium">Market/Revenue : <span className="font-medium text-orange-400	">{Math.round(value / (revenue * Math.pow(10, 7))).toString()}</span></span>

                </div>

                <AddStock stock={stock} setstock={setstock} />


            </div>

            <div className="flex flex-col border-2 border-blue-500 bg-slate-300 p-4 max-w-fit  ">
                <span className="font-medium my-2">Current Market Value INR: <span className="font-bold text-orange-600 text-lg">{value.toLocaleString('en-IN')}</span></span>
                <span className="font-medium">Current Market Value $: <span className="font-bold text-green-600 text-lg">{Math.round(value / dollar).toLocaleString()}</span></span>
            </div>
        </div>
    );
}

export default Home;