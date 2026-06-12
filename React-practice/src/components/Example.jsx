
import user from '../assets/user.jpg'

export default function Example(){
    return (
        <div className="flex flex-col items-center text-center gap-2 w-[260px] sm:w-[300px] shadow-md px-4 py-6 bg-blue-200 rounded-lg">
            <img src={user} alt="profile-image" className='w-[60%] rounded-full'/>
            <p className='px-2 py-1 bg-white rounded-md'>Justin Stone</p>
            <p className='px-2 py-1 bg-white rounded-md'>Web Developer at Sample Company</p>
            <div className='px-2 py-1 flex gap-2 bg-white rounded-md items-center'>
                <i className="fa-solid fa-user"></i>
                <span>1,200 followers</span>
            </div>
        </div>
    )
}