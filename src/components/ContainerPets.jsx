import PetItem from "./PetItem";

const ContainerPets = () => {
  const pets = [
    {
      name: "Jobi",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat5.jpg",
    },
    {
      name: "Kesley",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat7.jpg",
    },
    {
      name: "Jonell",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat6.jpg",
    },
    {
      name: "Ponell",
      breed: "Tabby",
      url: "https://pets-images.dev-apis.com/pets/cat4.jpg",
    },
  ];

  const handlePetItemClick = (pet) => {
    console.log("Pet item: ", pet);
  };

  return (
    <div className="containerReturn">
      {pets.map((pet, index) => (
        <PetItem
          key={index}
          pet={pet}
          handlePetItemClick={handlePetItemClick}
        />
      ))}
    </div>
  );
};

export default ContainerPets;
