import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import Card from "./components/card";
import PetForm from "./components/pet_form";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Cat>>(dogData);
  const [newPet, setNewPet] = useState<Array<Cat>>([]);

  //call back function sent as prop to PetForm
  const addNewPet = (petNew: Cat) => {
    setNewPet([...newPet, petNew]);
  };

  let catCount = cats.length;
  let dogCount = dogs.length;
  newPet.forEach((newPet) => (newPet.pet === "cat" ? catCount++ : dogCount++));

  console.log("Our pretties 😻: ", cats);
  console.log("doggy data", dogs);

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <Card
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              index={index}
              pet={cat.pet}
            />
          ))}

          {dogs.map((dog, index) => (
            <Card
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              pet={dog.pet}
            />
          ))}
          {newPet.map((pet, index) => (
            <Card
              key={pet.id}
              name={pet.name}
              species={pet.species}
              favFoods={pet.favFoods}
              birthYear={pet.birthYear}
              pet={pet.pet}
            />
          ))}
        </div>
        <PetForm addNewPet={addNewPet} />
      </main>

      <Footer />
    </>
  );
}

export default App;
