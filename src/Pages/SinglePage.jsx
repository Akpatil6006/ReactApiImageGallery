import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  const getData = async () => {
    const resp = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const { photo } = await resp.json();
    setData(photo);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="text-white w-full m-auto flex flex-col lg:flex-row py-7 pl-2 lg:w-3/4 justify-center bg-indigo-900 shadow-xl rounded-xl mt-1">
        <img
          src={data?.url}
          alt="image"
          className="w-3/4  lg:w-80 m-auto lg:mr-4 border rounded-xl lg:h-64"
        />
        <div className="flex flex-col justify-center items-center mt-4 lg:mt-0">
          <h1 className="text-2xl lg:text-3xl p-3">{data?.title}</h1>
          <p className="text-base lg:text-lg p-2">{data?.description}</p>
        </div>
      </div>
    </>
  );
};
