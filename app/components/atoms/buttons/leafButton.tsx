import "./leafButton.css";

interface IButton {
  articleTitle: string;
  buttonTitle: string;
}

const LeafButton = ({ articleTitle, buttonTitle }: IButton) => {
  return (
    <div className="leaf-bg bg">
      <div className="leaf-btn leaf">
        <h2 className="leaf-h2">{articleTitle}</h2>
        <button className="leaf-button">{buttonTitle}</button>
      </div>
    </div>
  );
};

export default LeafButton;
