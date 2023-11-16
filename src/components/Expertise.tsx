const expertise = 
[
    {
        name : 'MS Word',
        count: 5
    },
    {
        name : 'Ms Excel',
        count: 3
    },
    {
        name : 'Photoshop',
        count: 4
    },
    {
        name : 'LLustrator',
        count: 1
    },
    {
        name : 'Corel Draw',
        count: 4
    },
]
const Expertise = () => {
    return (
        <div>
            <div className="sm:px-20 max-sm:px-4 py-4">
                <h2 className="mb-2 text-lg font-semibold text-white dark:text-white">EXPERTISE</h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 text-white">
                {
                            expertise.map((item:any) => (
                                <>
                                    <div>{item.name}</div>
                                    <div className=" flex gap-1 items-center">
                                    {
                                        Array.from({ length: item.count }, () => (
                                            <>
                                                <div className="w-[10px] h-[10px] bg-orange-500 rounded-sm" ></div>
                                            </>
                                        ))
                                    }
                                    {
                                        Array.from({ length: 5 - item.count }, () => (
                                            <>
                                                <div className="w-[10px] h-[10px] bg-white rounded-sm" ></div>
                                            </>
                                        ))
                                    }
                                    </div>
                                </>
                            ))
                        }
                </div>

            </div>
        </div>
    )
}

export default Expertise