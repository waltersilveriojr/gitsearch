import "./styles.css";

type Props = {
  description: string;
  value: string;
  isLink?: boolean;
};

const LineInformation = ({ ...Props }: Props) => {
  return (
    <div className="card-information">
      {/* <div className="text-description"> */}
      <h1>{Props.description}</h1>
      {Props.isLink ? (
        <a href={Props.value}>{Props.value}</a>
      ) : (
        <h2>{Props.value}</h2>
      )}
      {/* </div> */}
    </div>
  );
};

export default LineInformation;
