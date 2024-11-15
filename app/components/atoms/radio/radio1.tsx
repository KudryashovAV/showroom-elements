import "./radio1.css";

const Radio1 = () => {
  return (
    <form className="radio1-form">
      <label className="radio1-label" htmlFor="01">
        One
      </label>
      <input className="radio1-input" id="01" type="radio" name="r" value="1" defaultChecked />
      <label className="radio1-label" htmlFor="02">
        Two
      </label>
      <input className="radio1-input" id="02" type="radio" name="r" value="2" />
      <label className="radio1-label" htmlFor="03">
        Three
      </label>
      <input className="radio1-input" id="03" type="radio" name="r" value="3" />
    </form>
  );
};

export default Radio1;
