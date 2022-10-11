import Stock from './Stock'





const AddStock = ({ stock, setstock }) => {




    const Delstock = (id) => {

        const stocks = stock.filter((item) => {
            return item.id !== id
        })

        setstock(stocks)
    }

    return (
        <div>
            <div className='  rounded overflow-auto max-h-[31.5rem] px-1 font-medium '>
                <ul>
                    {!stock.length && <h1>No stocks</h1>}

                    {stock.map((item, index) => {

                        return (
                            <Stock props={item} Delstock={Delstock} key={index}></Stock>
                        )
                    }
                    )
                    }
                </ul>
            </div>
        </div>

    )
}

export default AddStock