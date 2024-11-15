import Image from "next/image";
import "./card3.css";

const Card3 = () => {
  return (
    <div className="card3-wrapper">
      <figure className="card3 card3-with-hover">
        <img src="/images/cows.avif" alt="img24" />
        <figcaption className="card3-caption">
          <div className="card3-caption-content">
            <h2>Santa Magdalena del Uruguay</h2>
            <p>
              Dolor explicabo impedit reprehenderit explicabo amet voluptate dolore quas dolorum ex Fugit illo incidunt
              aspernatur nam quis.
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card3;
