import "./oceanButton.css";

interface IButton {
  articleTitle: string;
}

const OceanButton = ({ articleTitle }: IButton) => {
  return (
    <div className="ocean">
      <h2 className="ocean-h2">{articleTitle}</h2>
      <button className="ocean-button">Click Me!</button>
    </div>
  );
};

export default OceanButton;
