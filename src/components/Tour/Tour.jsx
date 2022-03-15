import React, { useEffect, useState } from "react";

export const Tour = ({ Tour }) => {
  useEffect(() => {
    console.log(Tour);
  }, [Tour]);
  return (
    <div>
      <h1>Tour</h1>
    </div>
  );
};
