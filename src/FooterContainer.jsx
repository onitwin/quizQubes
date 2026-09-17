import ghLogo from "./assets/githubLogo.svg";
import liLogo from "./assets/InBug-Black.png";
import kofiLogo from "./assets/kofi_symbol.svg";
export const FooterContainer = () => {
  return (
    <footer className="customFooter">
      <a
        className="socialsLink"
        title="github"
        href="https://github.com/onitwin/quizQubes"
        target="_blank"
      >
        <img className="linkIcons" src={ghLogo} />
      </a>
      <a
        className="socialsLink"
        title="linkedIn"
        href="https://www.linkedin.com/in/joseph-sutherland81/"
        target="_blank"
      >
        <img className="linkIcons" src={liLogo} />
      </a>
      <a
        className="socialsLink"
        title="kofi"
        href="https://ko-fi.com/onitwin"
        target="_blank"
      >
        <img className="linkIcons" src={kofiLogo} />
      </a>
    </footer>
  );
};
