import Image from "next/image";
import "./card2.css";

const Card2 = () => {
  return (
    <div className="card2-wrapper">
      <div className="card2">
        <Image src="/images/headphone.avif" alt="headphone" width="200" height="200" />
        <div className="card2-shine"></div>
      </div>
    </div>
  );
};

export default Card2;
