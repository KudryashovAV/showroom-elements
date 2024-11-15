import Background1 from "./components/atoms/backgrounds/background1";
import Background2 from "./components/atoms/backgrounds/background2";
import FireButton from "./components/atoms/buttons/fireButton";
import LeafButton from "./components/atoms/buttons/leafButton";
import OceanButton from "./components/atoms/buttons/oceanButton";
import OrangeButton from "./components/atoms/buttons/orangeButton";
import RainButton from "./components/atoms/buttons/rainButton";
import SandButton from "./components/atoms/buttons/sandButton";
import WaveButton from "./components/atoms/buttons/waveButton";
import WindButton from "./components/atoms/buttons/windButton";
import Radio1 from "./components/atoms/radio/radio1";
import Card1 from "./components/cells/itemCards/card1";
import Card2 from "./components/cells/itemCards/card2";
import Card3 from "./components/cells/itemCards/card3";

export default function Home() {
  return (
    <>
    <span>11 November 2024</span>
      <OceanButton articleTitle="Ocean" />
      <LeafButton articleTitle="Leaf" />
      <SandButton articleTitle="Sand" />
      <FireButton articleTitle="Fire" />
      <RainButton articleTitle="Rain" />
      <WindButton articleTitle="Wind" />
      <WaveButton articleTitle="Wave" />
      <OrangeButton articleTitle="Orange" />
      <Radio1 />
      <Card1 />
      <Card2 />
      <Card3 />
      <Background1>
        <span></span>
      </Background1>
      <Background2>
        <span></span>
      </Background2>
    </>
  );
}
