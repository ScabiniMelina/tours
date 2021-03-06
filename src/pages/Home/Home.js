import React, { useState, useEffect } from "react";
import { TourList } from "../../components/TourList/TourList";
import { Loading } from "../../components/Loading/Loading";

const apiUrl = "https://course-api.com/react-tours-project";
export const Home = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      setTours(data);
      console.log(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (tours.length === 0) {
    return (
      <main>
        <h1> No tours found</h1>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <TourList tours={tours} removeTour={removeTour} />
    </main>
  );
};
