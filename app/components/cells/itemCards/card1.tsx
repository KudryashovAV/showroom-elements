import Image from "next/image";
import "./card1.css";

const Card1 = () => {
  return (
    <div className="card1-main">
      <div className="card1">
        <div className="card1-headphone">
          <Image className="card1-image" src="/images/headphone.avif" alt="headphone" width="300" height="300" />
        </div>

        <div className="card1-infos">
          <h3 className="card1-title">Wireless Headphones</h3>
          <h2 className="card1-price">
            $40.<small>99</small>
          </h2>
          <button className="card1-buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
