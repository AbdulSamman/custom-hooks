import { useToggle } from "../hooks/useToggle";

export const PageUseToggle = () => {
  const [showAds, toggleAds, adsOff, adsClass] = useToggle(false);
  const [sendMail, toggleMail, mailsOff, mailClass] = useToggle(false);
  const [layoutDark, toggleLayout, layoutOff] = useToggle(true);
  return (
    <div className="pageUseToggle">
      <p>The useToggle Page</p>
      <hr />
      <h2>User Settings</h2>
      <div className="rows">
        <div className="row">
          <div>
            <button onClick={toggleAds}>Advertisements</button>
          </div>
          <p className={adsClass}>
            {showAds
              ? "yes, show advertisements"
              : "no, don't show me advertisements"}
          </p>
        </div>
        <div className="row">
          <div>
            <button onClick={toggleMail}>Mails</button>
          </div>
          <p className={mailClass}>
            {sendMail ? "yes, send md mails" : "no, don't send md mails"}
          </p>
        </div>

        <p>
          <button
            style={{ backgroundColor: layoutDark ? "#444" : "yellow" }}
            onClick={toggleLayout}
          >
            Layout: {layoutDark ? "dark" : "light"}
          </button>
        </p>

        <hr />
      </div>
      <div className="turnOff">
        <button onClick={adsOff}>Turn off advertisements</button>
        <button onClick={mailsOff}>Turn off mails</button>
      </div>
    </div>
  );
};
