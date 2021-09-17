import LineInformation from "components/LineInformation";
import "./styles.css";

type Props = {
    avatar_url: string;
    url: string;
    name: string;
    followers: number;
    location: string;
}

const CardProfile = ({avatar_url, url, name, followers, location} : Props) => {
  return (
    <div className="base-card profile_container_card">
      <div className="img-container">
        <img
          src={avatar_url}
          alt="perfil"
        ></img>
      </div>
      <div className="text-container">         
          <div className="text-info">
            <h1>Informação</h1>
          </div>
          <LineInformation description="Perfil:" value={url} isLink={true} />
          <LineInformation description="Seguidores:" value={`${followers}`} />
          <LineInformation description="Localidade:" value={location} />
          <LineInformation description="Nome:" value={name} />
      </div>
    </div>
  );
};

export default CardProfile;
