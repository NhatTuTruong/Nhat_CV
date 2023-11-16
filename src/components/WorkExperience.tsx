const workExperience =
    [
        {
            job: 'BACHELOR OF DESIGN',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            year: '2012 - 2015',
            companyName: 'Lazada'
        },
        {
            job: 'BACHELOR OF DESIGN',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
            year: '2012 - 2015',
            companyName: 'Tiki'
        }
    ]

const WorkExperience = () => {
    return (
        <div className="text-[#3958a8] sm:px-20 max-sm:px-4 py-4">
            <div className="flex items-center">
                <h2 className="mb-2 text-lg font-semibold text-black w-[40%] max-sm:w-[80%]">WORK EXPERIENCE</h2>
                <span className="w-full border-t border border-[#3958a8]"></span>
                <span className="w-[15px] h-[12px] bg-[#3958a8] rounded-full"></span>
            </div>
            {
                workExperience.map((item: any) => (
                    <div className="grid grid-cols-1 pb-4 sm:grid-cols-3">
                        <div className="col-span-2">
                            <p className=" text-gray-500 dark:text-gray-400 font-semibold">{item.job}</p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">{item.companyName}</p>
                        </div>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">{item.year}</p>
                        <p className="col-span-3 text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default WorkExperience