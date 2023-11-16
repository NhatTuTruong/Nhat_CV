
import avatar from '../assets/images/61103071_2361422507447925_6222318223514140672_n_1.jpg'

const Avatar = () => {
  return (
    <div className='px-20 max-sm:px-2 pt-20 pb-10'>    
        <img className="rounded-full sm:w-[200px] sm:h-[200px] max-sm:w-[200px] max-sm:h-[200px]  mx-auto" src={avatar} alt={avatar}/>
    </div>
  )
}

export default Avatar