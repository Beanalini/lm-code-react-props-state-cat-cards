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
    setAddName("");
    setAddSpecies("");
    setAddFavFood("");
    setAddBirthYear("");
    setAddPetType("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={newPet} className="formCard">
        <fieldset>
          <legend>Add your Pet</legend>
          <label htmlFor="petType"></label>
          <div>
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
          </div>
          <div>
            <label>
              Species:
              <input
                value={addSpecies}
                onChange={(event) => {
                  setAddSpecies(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Favourite Food(s):
              <input
                value={addFavFood}
                onChange={(event) => {
                  setAddFavFood(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Birth Year:
              <input
                value={addBirthYear}
                onChange={(event) => {
                  setAddBirthYear(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
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
          </div>

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default PetForm;
