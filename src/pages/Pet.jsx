import { NavLink } from "react-router";

const Pet = () => {
  return (
    <div className="details-container">
      <h1>Pet page</h1>
      <NavLink to="/" end>
        <button className="back-button">Back</button>
      </NavLink>
    </div>
  );
};

export default Pet;
