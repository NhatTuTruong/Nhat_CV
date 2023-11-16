
import { BsFillTelephoneFill, BsFillEnvelopeAtFill,BsFillPinMapFill  } from "react-icons/bs";
const contact = [
    {
        label : 'Phone',
        value : '+0932435066',
        icon : <BsFillTelephoneFill/>
    },
    {
        label : 'Email',
        value : 'mail@gmail.com',
        icon : <BsFillEnvelopeAtFill/>
    },
    {
        label : 'Address',
        value : 'Duy Xuyen, Quang Nam',
        icon : <BsFillPinMapFill/>
    }
]

const Contact = () => {
    return (
        <div className="sm:px-20 max-sm:px-4 py-10">
            <h2 className="mb-2 text-lg font-semibold text-white dark:text-white">CONTACT</h2>
            <ul className="space-y-2 text-left text-white dark:text-white">
                {
                    contact.map((item:any) => (
                        <li className="flex items-start space-x-3 rtl:space-x-reverse" key={item.label}>
                            <div className="pt-2">
                                {item.icon}
                            </div>
                            <div>
                                <p className="text-lg">{item.label}</p>
                                <p>{item.value}</p>
                            </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contact