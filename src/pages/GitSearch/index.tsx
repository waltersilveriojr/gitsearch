import { useState } from "react";
import CardProfile from "components/CardProfile";
import "./styles.css";
import axios from "axios";
import LoaderSearch from "./LoaderSearch";

type FormData = {
  search: string;
};

type Profile = {
  avatar_url: string;
  url: string;
  name: string;
  followers: number;
  location: string;
};

const GitSearch = () => {
  const [formData, setFormData] = useState<FormData>({ search: "" });
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
    if (value.length === 0) {
      setProfile(undefined);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.search}`)
      .then((Response) => {
        setProfile(Response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="git-search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="search"
              value={formData.search}
              className="base-input search-input"
              placeholder="Usuário GitHub"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <LoaderSearch />
      ) : (
        profile && (
          <CardProfile
            avatar_url={profile.avatar_url}
            url={profile.url}
            name={profile.name}
            location={profile.location}
            followers={profile.followers}
          ></CardProfile>
        )
      )}
    </div>
  );
};

export default GitSearch;
