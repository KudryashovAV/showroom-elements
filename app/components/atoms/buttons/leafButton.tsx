import "./leafButton.css";

interface IButton {
  articleTitle: string;
}

const LeafButton = ({ articleTitle }: IButton) => {
  return (
    <div className="leaf">
      <h2 className="leaf-h2">{articleTitle}</h2>
      <button className="leaf-button">Click Me!</button>
    </div>
  );
};

export default LeafButton;
