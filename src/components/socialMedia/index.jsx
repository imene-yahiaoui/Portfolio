import {DiGithubBadge } from   "react-icons/di";
import {FaDiscord } from "react-icons/fa";
import {TiSocialLinkedinCircular } from "react-icons/ti";
import "./style.css"
const SocialMedia = () => {
  return( <ul className="socialMedia">
 
<li>
 <a  href ="https://github.com/imene-yahiaoui" target="_blank" rel="noreferrer" ><DiGithubBadge  color="var(--body_color)"size="50px"/></a>
</li>
<li>
 <a href ="https://github.com/imene-yahiaoui" target="_blank" rel="noreferrer" ><FaDiscord  color="var(--body_color)" size="40px"/></a>
 </li>
 <li>
 <a href ="https://github.com/imene-yahiaoui" target="_blank" rel="noreferrer" ><TiSocialLinkedinCircular  color="var(--body_color)" size="50px"/></a>
 </li>
  </ul>
  )
};

export default SocialMedia;
