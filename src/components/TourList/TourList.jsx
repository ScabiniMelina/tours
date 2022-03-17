import React, { useEffect } from "react";
import { Tour } from "../Tour/Tour";

export const TourList = ({ tours = [] }) => {
  useEffect(() => {
    console.log(tours);
  });
  return (
    <section>
      <h1 className="title">Tour List</h1>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </section>
  );
};
