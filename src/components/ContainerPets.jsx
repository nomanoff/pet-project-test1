import React from "react";
import Pets from "./Pets";

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
        }
    ];

    return (
        <div className="containerReturn">
            {pets.map((pet, index) => (
                <Pets key={index} url={pet.url} name={pet.name} breed={pet.breed} />
            ))}
        </div>
    );
}

export default ContainerPets;
