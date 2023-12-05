import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Cat from "./data/cat";
import Card from "./components/cat_card";
import catData from "./data/cat-data";

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);

  const catCount = cats.length;
  console.log("Our pretties 😻: ", cats);
  console.log(cats.length);
  console.log(catData);
  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <Card
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
