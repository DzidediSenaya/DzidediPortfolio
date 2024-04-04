import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";




export default function SocialHeader(){
    return(
       <>
       <div className="flex-col text-center py-40 px-60  text-black text-hover:blue-900">
        <Link to="https://www.linkedin.com/in/dzidedi-senaya-8432bb6b/" target="_blank" className="px-1"><BsLinkedin/></Link>
        <Link to="https://github.com/DzidediSenaya" target="_blank" className="px-1"><AiOutlineGithub/></Link>
        <Link to="https://www.facebook.com/dzidedi.senaya" target="_blank" className="px-1"><BsFacebook/></Link>
       </div>
      
       </> 
    )
}