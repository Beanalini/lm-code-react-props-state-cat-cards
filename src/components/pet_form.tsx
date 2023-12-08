import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cat from "../data/cat";

interface AddPetFormProps {
  addNewPet(addPet: Cat): void;
}

const PetForm: React.FC<AddPetFormProps> = ({ addNewPet }) => {
  const [addName, setAddName] = useState<string>("");
  const [addSpecies, setAddSpecies] = useState<string>("");
  const [addFavFood, setAddFavFood] = useState<string>("");
  const [addBirthYear, setAddBirthYear] = useState<string>("");
  const [addPetType, setAddPetType] = useState<string>("cat");

  const newPet = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //create cat/dog object to pass into Card component
    const addPet = {
      id: uuidv4(),
      name: addName,
      species: addSpecies,
      favFoods: [addFavFood],
      birthYear: +addBirthYear, //returns a string coerce to number
      pet: addPetType,
    };
    //console.log(addPet);
    addNewPet(addPet);
  };

  return (
    <form onSubmit={newPet}>
      <fieldset>
        <legend>Add a new Pet</legend>
        <label htmlFor="petType"></label>
        <label>
          Name:
          <input
            type="text"
            name="addName"
            value={addName}
            onChange={(event) => {
              setAddName(event.target.value);
            }}
          />
        </label>
        <label>
          Species:
          <input
            value={addSpecies}
            onChange={(event) => {
              setAddSpecies(event.target.value);
            }}
          />
        </label>
        <label>
          Favourite Food(s):
          <input
            value={addFavFood}
            onChange={(event) => {
              setAddFavFood(event.target.value);
            }}
          />
        </label>
        <label>
          Birth Year:
          <input
            value={addBirthYear}
            onChange={(event) => {
              setAddBirthYear(event.target.value);
            }}
          />
        </label>
        <label>
          Select Pet Type:
          <select
            name="addPetType"
            value={addPetType}
            onChange={(event) => {
              setAddPetType(event.target.value);
            }}
          >
            <option value="cat">cat</option>
            <option value="dog">Dog</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};
export default PetForm;
