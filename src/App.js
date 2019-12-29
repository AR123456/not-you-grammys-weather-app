import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col } from "reactstrap";
import { Wrapper } from "./styles";
import API from "./utils/API";
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetail from "./components/DayDetail";

const App = () => {
  const [data, setData] = useState({
    searchTerm: "",
    selectedDay: null,
    location: "",
    days: []
  });
  const { searchTerm, selectedDay, location, days } = data;

  useEffect(() => {
    getWeather("Aurora, CO");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.title = `This week's weather ${location ? "for " + location : ""}`;
  }, [location]);

  const getWeather = address => {
    if (address) {
      API.getWeather(address)
        .then(res => {
          if (res) {
            setData({
              searchTerm: "",
              selectedDay: null,
              location: `${res.data.city_name}, ${res.data.state_code}`,
              days: res.data.data
            });
          } else {
            setData({
              ...data,
              searchTerm: "",
              selectedDay: null
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      alert("Search a location to get this week's weather data!");
    }
  };

  const handleInputChange = event => {
    setData({ ...data, searchTerm: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    getWeather(searchTerm);
  };

  return (
    <Wrapper>
      {!days.length ? (
        <div style={{ padding: "20% 50%", margin: -8, width: 16, height: 16 }}>
          <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true" />
        </div>
      ) : (
        <>
          <Row>
            <Col md={7}>
              <h1>Weather for {location}</h1>
            </Col>
            <Col md={5}>
              <SearchBar
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Col>
          </Row>
          <Row>
            {days.map(day => (
              <DayCard
                key={day.ts}
                day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
                current={day.temp}
                high={day.max_temp}
                low={day.min_temp}
                precip={day.pop}
                icon={day.weather.icon}
                description={day.weather.description}
                selectDay={() => setData({ ...data, selectedDay: day })}
                isActive={day === selectedDay}
              />
            ))}
          </Row>
          <Row>
            <Col>
              {selectedDay ? (
                <DayDetail
                  date={moment(selectedDay.valid_date, "YYYY-MM-DD").format(
                    "dddd, MMMM Do, YYYY"
                  )}
                  location={location}
                  current={selectedDay.temp}
                  high={selectedDay.max_temp}
                  apparentHigh={selectedDay.app_max_temp}
                  low={selectedDay.min_temp}
                  apparentLow={selectedDay.app_min_temp}
                  precip={selectedDay.pop}
                  icon={selectedDay.weather.icon}
                  windSpeed={selectedDay.wind_spd}
                  windDirection={selectedDay.wind_cdir_full}
                  description={selectedDay.weather.description}
                />
              ) : (
                <h2>Select a day above to get details!</h2>
              )}
            </Col>
          </Row>
        </>
      )}
    </Wrapper>
  );
};

export default App;
