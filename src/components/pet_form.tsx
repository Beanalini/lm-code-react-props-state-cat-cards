import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function PetForm(): JSX.Element {
  const [addName, setAddName] = useState<string>("");
  const [addSpecies, setAddSpecies] = useState<string>("");
  const [addFavFood, setAddFavFood] = useState<string>("");
  const [addBirthYear, setAddBirthYear] = useState<string>("");
  const [addPetType, setAddPetType] = useState<string>("cat");

  const addNewPet = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //create cat/dog object to pass into Card component
    const addPet = {
      id: uuidv4(),
      name: addName,
      species: addSpecies,
      favFood: [addFavFood],
      birthYear: addBirthYear,
      pet: addPetType,
    };
    console.log(addPet.name);
  };
  return (
    <form onSubmit={addNewPet}>
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
}
export default PetForm;
