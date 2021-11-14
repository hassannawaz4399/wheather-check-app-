import React from "react";
import { useSelector } from "react-redux";

import Forecast from "../components/Forecast/Forecast";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import Search from "../components/Search/Search";
import Spinner from "../components/ui/Spinner/Spinner";
import Weather from "../components/Weather/Weather";
import { AppStore } from "../store/store";
import { HomePage } from "./styled";

const Home = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <HomePage>
      {loading && <Spinner />}
      <Header />
      <Search />
      <article className="main-body">
        <Weather />
        <Map />
      </article>
      <Forecast />
    </HomePage>
  );
};

export default Home;
