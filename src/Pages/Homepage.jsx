import React, { useEffect, useState } from "react";
import { ImageCard } from "../component/ImageCard";

export const Homepage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
    );
    const { photos } = await resp.json();
    setData(photos);
    console.log(photos);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-center text-xl font-bold">
        Click on Image to get more Info
      </h2>
      <div className="flex justify-center flex-wrap cursor-pointer">
        {data?.map((e, i) => {
          return <ImageCard id={e.id} imageUrl={e.url} key={i} />;
        })}
      </div>
    </>
  );
};
