interface catImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const CatImage: React.FC<catImageProps> = (props) => (
  <>
    <img className="card__image" src={props.image} alt={props.altText} />
    <p className="card__text__small">
      Image licenced under{" "}
      <a href={props.licenceUrl}>
        {props.attributionName && (
          <>
            &nbsp;by <a href={props.attributionUrl}>{props.attributionName}</a>
          </>
        )}
      </a>
    </p>
  </>
);

export default CatImage;
