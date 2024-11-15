import "./background1.css";

const Background1 = ({children}: {children: JSX.Element}) => {
  return (
    <div className="backwrapper">
      <div className="grid-bg ba-grid anim">
        <div className="inner">{children}</div>
      </div>
    </div>
  );
};

export default Background1;
