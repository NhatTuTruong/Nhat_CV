const education =
    [
        {
            title: 'BACHELOR OF DESIGN',
            description: 'University/ Collage/ Insitute',
            year: '2012 - 2015',
        },
        {
            title: 'BACHELOR OF DESIGN',
            description: 'University/ Collage/ Insitute',
            year: '2012 - 2015',
        }
    ]
export const Education = () => {
    return (
        <div className="text-[#3958a8] sm:px-20 max-sm:px-4 py-4">
        
            <div className="flex items-center">
                <h2 className="mb-2 text-lg font-semibold text-black w-[40%] max-sm:w-[80%]">EDUCATION</h2>
                <span className="w-full border-t border border-[#3958a8]"></span>
                <span className="w-[15px] h-[12px] bg-[#3958a8] rounded-full"></span>
            </div>
            {
                education.map((item: any) => (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="col-span-2">
                            <p className="mb-3 text-gray-500 dark:text-gray-400 font-semibold">{item.title}</p>
                            <p className="mb-3 text-gray-500 dark:text-gray-400">{item.description}</p>
                        </div>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">{item.year}</p>
                    </div>
                ))
            }

        </div>
    )
}