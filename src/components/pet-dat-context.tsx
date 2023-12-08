import { createContext } from "react";
import Cat from "../data/cat";

export type GlobalContent = {
  catData: Cat;
  setCatData: (c: Cat) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  catData: {
    name: "default",
    species: "default",
    favFoods: ["default"],
    birthYear: 0,
    pet: "default",
  },

  setCatData: () => {},
});
