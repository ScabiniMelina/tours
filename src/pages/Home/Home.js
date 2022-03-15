import React, { useState, useEffect } from "react";
import { TourList } from "../../components/TourList/TourList";
import { Loading } from "../../components/Loading/Loading";

const apiUrl = "https://course-api.com/react-tours-project";
export const Home = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <main>
      <h1>Lista de Tours</h1>
      <TourList tours={tours} />;
    </main>
  );
};
