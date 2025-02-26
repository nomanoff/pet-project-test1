import React from "react";
import { Location, SelectAnimal } from "./Inputs&Selects";
import SearchBtn from "./ButtonSearch";

const ContainerInputs = () => {
  return (
    <div className="containerInputs">
      <h1>Pet Finder</h1>

      <p>Location</p>
      <Location placeholder="Enter Location"></Location>

      <p>Animal</p>
      <SelectAnimal>
        <option value="">Select an animal</option>
      </SelectAnimal>

      <p>Breed</p>
      <SelectAnimal>
        <option value="">Select a breed</option>
      </SelectAnimal>

      <SearchBtn>Search</SearchBtn>
    </div>
  );
};

export default ContainerInputs;
