import "./orangeButton.css";

interface IButton {
  articleTitle?: string;
}

const WindButton = ({ articleTitle }: IButton) => {
  return (
    <div className="orange">
      <h2 className="orange-h2">{articleTitle}</h2>
      <button className="orange-button">Click Me!</button>
    </div>
  );
};

export default WindButton;
