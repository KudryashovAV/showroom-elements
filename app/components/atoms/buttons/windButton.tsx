import Link from "next/link";
import "./windButton.css";

interface IButton {
  articleTitle: string;
}

const WindButton = ({ articleTitle }: IButton) => {
  return (
    <div className="wind">
      <h2 className="wind-h2">{articleTitle}</h2>
      <button className="wind-button">
        <span className="wind-button-text">Click Me!</span>
      </button>
    </div>
  );
};

export default WindButton;
