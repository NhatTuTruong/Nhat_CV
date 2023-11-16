
const skill =
    [
        {
            name: 'Public Speaking',
        },
        {
            name: 'Finacial Management',
        },
        {
            name: 'Creative Idea',
        },
        {
            name: 'Project Manager',
        },
        {
            name: 'Directer',
        }
    ]
const Skill = () => {
    return (
        <div className="sm:px-20 max-sm:px-4 py-4">
            <h2 className="mb-2 text-lg font-semibold text-white dark:text-white">PERSONONAL SKILL</h2>
            <ul className="space-y-4 text-left text-white dark:text-white">
                {
                    skill.map((item: any) => (
                        <li className="flex items-center space-x-3 rtl:space-x-reverse" key={item.label}>
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span>
                                <p>{item.name}</p>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Skill