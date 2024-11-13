import "./fireButton.css";

interface IButton {
  articleTitle: string;
}

const FireButton = ({ articleTitle }: IButton) => {
  return (
    <div className="fire">
      <h2 className="fire-h2">{articleTitle}</h2>
      <button className="fire-button">Click Me!</button>
    </div>
  );
};

export default FireButton;
