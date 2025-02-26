import { useLocation, useParams } from "react-router";

const Pet = () => {
  const { id } = useParams();
  let location = useLocation();

  console.log("Location: ", location);
  console.log("Params: ", id);

  return (
    <div className="details-container">
      <h1>Pet page</h1>
      <p>{id}</p>
    </div>
  );
};

export default Pet;
