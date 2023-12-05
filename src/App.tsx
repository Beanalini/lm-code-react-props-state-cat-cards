import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import Card from "./components/cat_card";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Cat>>(dogData);

  const catCount = cats.length;
  const dogCount = dogs.length;
  console.log("Our pretties 😻: ", cats);
  console.log(cats.length);
  console.log(catData);
  console.log("doggy data", dogs);
  console.log(dogData);

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
          ;
          {dogs.map((dog, index) => (
            <Card
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              index={index}
              pet={dog.pet}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
