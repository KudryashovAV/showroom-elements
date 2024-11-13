import "./rainButton.css";

interface IButton {
  articleTitle: string;
}

const RainButton = ({ articleTitle }: IButton) => {
  return (
    <div className="rain">
      <h2 className="rain-h2">{articleTitle}</h2>
      <button className="rain-button">Click Me!</button>
    </div>
  );
};

export default RainButton;
