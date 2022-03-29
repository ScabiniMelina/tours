import React, { useEffect } from "react";
import { Tour } from "../Tour/Tour";

export const TourList = ({ tours = [], removeTour }) => {
  useEffect(() => {
    console.log(tours);
    console.log(removeTour);
  });
  return (
    <section>
      <h1 className="title">Tour List</h1>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
};
