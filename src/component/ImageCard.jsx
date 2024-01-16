import React from "react";
import { useNavigate } from "react-router-dom";

export const ImageCard = ({ imageUrl, id }) => {
  const navigate = useNavigate();

  const redirectToPage = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="w-full md:W-1/4 lg:w-1/5 p-4">
      <img src={imageUrl} alt="image" onClick={redirectToPage} />
    </div>
  );
};
