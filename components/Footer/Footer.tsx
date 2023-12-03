import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiDribbbleFill,
  RiWhatsappFill
} from "react-icons/ri";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div>
        <span>find me on:</span>
      </div>
      <div>
        <a
          aria-label="Abdulroheem linkedin profile"
          href="https://www.linkedin.com/in/abdulroheem-ayanwumi/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Abdulroheem twitter profile"
          href="https://twitter.com/abdulroheem_"
          target="_blank"
          rel="noreferrer"
        > 
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      {/* <div>
        <a
          aria-label="Abdulroheem twitter profile"
          href="https://wa.me/+2348127671686"
          target="_blank"
          rel="noreferrer"
        >
          <RiWhatsappFill fill="#607B96" size={25} />
        </a>
      </div> */}
      <div>
        <a
          aria-label="Abdulroheem github profile"
          href="https://github.com/ayanwumi101/"
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
      <div>
        <a
          aria-label="Designed by Yanka Darelova"
          href="https://dribbble.com/shots/18111356-Portfolio-Concept-V-2"
          target="_blank"
          rel="noreferrer"
          title="Designed by Yanka Darelova"
        >
          <span className={styles.githubUsername}>
            Designed by Yanka Darelova
          </span>
          <RiDribbbleFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
