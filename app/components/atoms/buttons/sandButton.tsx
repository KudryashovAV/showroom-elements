import "./sandButton.css";

interface IButton {
  articleTitle: string;
}

const SandButton = ({ articleTitle }: IButton) => {
  return (
    <div className="sand">
      <h2 className="sand-h2">{articleTitle}</h2>
      <button className="sand-button">Click Me!</button>
    </div>
  );
};

export default SandButton;
