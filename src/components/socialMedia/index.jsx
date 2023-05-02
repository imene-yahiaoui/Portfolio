import { DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { GrCodepen } from "react-icons/gr";

import "./style.css";
const SocialMedia = () => {
  const lang = localStorage.getItem("i18nextLng");
  return (
    <ul    style={{ direction: lang === "ar" ? "rtl" : "ltr" }} className="socialMedia">
      <li>
        <a
          href="https://github.com/imene-yahiaoui"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <DiGithubBadge
            color="var(--body_color)"
            size="50px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
      </li>
      <li>
        <a
          href="https://discord.gg/#1420"
          target="_blank"
          rel="noreferrer"
          aria-label="discord"
        >
          <FaDiscord
            color="var(--body_color)"
            size="40px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
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
          aria-label="linkedin"
        >
          <TiSocialLinkedinCircular
            color="var(--body_color)"
            size="50px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
      </li>
      <li>
        <a
          href="https://codepen.io/ImeneYahiaoui"
          target="_blank"
          rel="noreferrer"
          aria-label="codepen"
        >
          <GrCodepen
            color="var(--body_color)"
            size="40px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
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
