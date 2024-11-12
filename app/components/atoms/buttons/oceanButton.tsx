import "./oceanButton.css";

interface IButton {
  articleTitle: string;
  buttonTitle: string;
}

const OceanButton = ({ articleTitle, buttonTitle }: IButton) => {
  return (
    <div className="ocean-btn-bg ocean-bg-1">
      <div className="ocean-btn ocean">
        <h2 className="ocean-h2">{articleTitle}</h2>
        <button className="ocean-button">{buttonTitle}</button>
      </div>
    </div>
  );
};

export default OceanButton;
