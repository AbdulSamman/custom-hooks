import { useToggle } from "../hooks/useToggle";

export const PageUseToggle = () => {
  const [showAds, toggleAds, adsClass] = useToggle(false);

  const [sendMail, toggleMail, mailClass] = useToggle(false);

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
        <div className="row">
          <div>
            <button onClick={toggleAds}>Layout: dark</button>
          </div>
        </div>
      </div>
    </div>
  );
};
