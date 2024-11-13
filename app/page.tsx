import FireButton from "./components/atoms/buttons/fireButton";
import LeafButton from "./components/atoms/buttons/leafButton";
import OceanButton from "./components/atoms/buttons/oceanButton";
import RainButton from "./components/atoms/buttons/rainButton";
import SandButton from "./components/atoms/buttons/sandButton";
import WaveButton from "./components/atoms/buttons/waveButton";
import WindButton from "./components/atoms/buttons/windButton";
import Card1 from "./components/cells/itemCards/card1";

export default function Home() {
  return (
    <>
      <OceanButton articleTitle="Ocean" />
      <LeafButton articleTitle="Leaf" />
      <SandButton articleTitle="Sand" />
      <FireButton articleTitle="Fire" />
      <RainButton articleTitle="Rain" />
      <WindButton articleTitle="Wind" />
      <WaveButton articleTitle="Wave" />
      <Card1 />
    </>
  );
}
