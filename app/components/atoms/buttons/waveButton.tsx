import "./waveButton.css";

interface IButton {
  articleTitle: string;
}

const WaveButton = ({ articleTitle }: IButton) => {
  return (
    <div className="wave">
      <h2 className="wave-h2">{articleTitle}</h2>
      <button className="wave-button">
        <a href="#" className="wave-button-text">
          Click Me!
        </a>
      </button>
    </div>
  );
};

export default WaveButton;
