import "./background2.css";

const Background2 = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="background2">
      <div>{children}</div>
    </div>
  );
};

export default Background2;
