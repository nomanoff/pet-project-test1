import { NavLink } from "react-router";
import ContainerInputs from "../components/ContainerInputs";
import ContainerPets from "../components/ContainerPets";

const Main = () => {
  return (
    <>
      <div className="container">
        <ContainerInputs />
        <NavLink to="/pet" end>
          <ContainerPets />
        </NavLink>
      </div>
    </>
  );
};

export default Main;
