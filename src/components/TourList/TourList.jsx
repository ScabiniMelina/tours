import React from "react";
import { Tour } from "../Tour/Tour";

export const TourList = ({ Tours = [] }) => {
  return Tours.map((tour) => <Tour key={tour.id} tour={tour} />);
};
