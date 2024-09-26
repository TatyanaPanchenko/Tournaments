import Header from "../Header/Header";
import Main from "../Main/Main";
import data from "../data/data.json";

import "./App.scss";

function App() {
  const { tournaments, countries, events } = data;
  const countriesArr = [];
  const getCountries = (countries) => {
    countries.map((item) => {
      countriesArr.push(item.country_id);
    });
  };
  getCountries(countries);
  const arrCountry1 = [];
  const arrCountry2 = [];
  const arrCountry3 = [];
  const arrCountry4 = [];

  const findTournaments = (country) => {
    switch (country) {
      case 1: {
        getTournaments(tournaments, 1, arrCountry1);
        break;
      }
      case 2: {
        getTournaments(tournaments, 2, arrCountry2);
        break;
      }
      case 3: {
        getTournaments(tournaments, 3, arrCountry3);
        break;
      }
      case 4: {
        getTournaments(tournaments, 4, arrCountry4);
        break;
      }
      default: {
        break;
      }
    }
  };
  const getTournaments = (tournaments, country, arr) => {
    tournaments.forEach((item) => {
      if (item["country_id"] == country) {
        arr.push(item);
      }
    });
    return arr;
  };
  countriesArr.forEach((country) => {
    findTournaments(country);
  });

  const getEvents = (events, arr) => {
    events.forEach((item) => {
      if (item["tournament_id"] === arr[0]["tournament_id"]) {
        arr.push(item);
      }
    });
    return arr;
  };

  const tournamentsArr = [];
  const getTournamentsArr = (
    arrCountry1,
    arrCountry2,
    arrCountry3,
    arrCountry4
  ) => {
    tournamentsArr.push(getEvents(events, arrCountry1));
    tournamentsArr.push(getEvents(events, arrCountry2));
    tournamentsArr.push(getEvents(events, arrCountry3));
    tournamentsArr.push(getEvents(events, arrCountry4));
    return tournamentsArr;
  };
  getTournamentsArr(arrCountry1, arrCountry2, arrCountry3, arrCountry4);

  return (
    <>
      <Header />
      {<Main data={tournamentsArr} />}
    </>
  );
}
export default App;
// tournamentsArr
