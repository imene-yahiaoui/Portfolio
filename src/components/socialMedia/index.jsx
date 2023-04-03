import { DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import "./style.css";
const SocialMedia = () => {
  return (
    <ul className="socialMedia">
      <li>
        <a
          href="https://github.com/imene-yahiaoui"
          target="_blank"
          rel="noreferrer"
        >
          <DiGithubBadge
            color="var(--body_color)"
            size="50px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--lang_color)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
      </li>
      <li>
        <a href="https://discord.gg/#1420" target="_blank" rel="noreferrer">
          <FaDiscord color="var(--body_color)" size="40px" 
           onMouseOver={({ target }) =>
           (target.style.color = "var(--lang_color)")
         }
         onMouseOut={({ target }) =>
           (target.style.color = "var(--body_color)")
         }
          
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/imene-ikhlef-yahiaoui"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedinCircular  color="var(--body_color)" size="50px" 
           onMouseOver={({ target }) =>
           (target.style.color = "var(--lang_color)")
         }
         onMouseOut={({ target }) =>
           (target.style.color = "var(--body_color)")
         }
          
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
