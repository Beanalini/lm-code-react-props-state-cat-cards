import CatImage from "./cat_image";
import images from "../data/cat-image-data";
import Image from "../data/image";

interface CardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  index: number;
  pet?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  index,
  pet,
}) => {
  //   console.log("cat card receiving props from App!? props received are:", props);
  console.log(index);
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>

      {pet !== "dog" && index < images.length && (
        <CatImage
          image={images[index].image}
          altText={images[index].altText}
          licenceType={images[index].licenceType}
          licenceUrl={images[index].licenceUrl}
          attributionName={images[index].attributionName}
          attributionUrl={images[index].attributionUrl}
        />
      )}
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default Card;
