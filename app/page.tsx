import LeafButton from "./components/atoms/buttons/leafButton";
import OceanButton from "./components/atoms/buttons/oceanButton";
import "./style.css";

export default function Home() {
  return (
    <>
      <OceanButton articleTitle="Ocean" buttonTitle="Click On Me!" />
      <LeafButton articleTitle="Leaf" buttonTitle="It Growth!" />
      <div className="btn-bg bg-3">
        <div className="btn btn-3">
          <h2>Sand</h2>
          <button>Flow away</button>
        </div>
      </div>
      <div className="btn-bg bg-4">
        <div className="btn btn-4">
          <h2>Fire</h2>
          <button>On the flame</button>
        </div>
      </div>
      <div className="btn-bg bg-5">
        <div className="btn btn-5">
          <h2>Windy</h2>
          <button>Raining drop</button>
        </div>
      </div>
      <div className="btn-bg bg-6">
        <div className="btn btn-6">
          <h2>Mamba</h2>
          <button>Long night</button>
        </div>
      </div>
      <div className="btn-bg bg-1">
        <div className="btn btn-1">
          <h2>If you like it</h2>
          <a href="https:/?cyfrania.com">
            <button>Click here</button>
          </a>
        </div>
      </div>
    </>
  );
}
