"use client";
import React, { useState } from "react";
import Information from "./Information";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SearchBar() {
  const [year, setYear] = useState(new Date());
  const [tn, setTn] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(`/api?year=${year.getFullYear()}&tn=${tn}`);
      if (!res.ok) {
        throw new Error(`API error with status code: ${response.status}`);
      }
      const result = await res.json();
      setData(result.data);
    } catch (error) {
      setError(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setYear("");
    setTn("");
    fetchData();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto  w-fit mt-4">
          <DatePicker
            required
            className="text-center rounded-xl py-2 px-4 w-80"
            placeholderText="Select Year"
            dateFormat="yyyy"
            showYearPicker
            selected={year}
            onChange={(date) => setYear(date)}
          />
        </div>
        <div className="relative mx-auto  w-fit mt-4 ">
          <input
            required
            className="text-center rounded-xl py-2 px-4 w-80"
            type="text"
            value={tn}
            onChange={(e) => setTn(e.target.value)}
            placeholder="Enter TN"
          />
        </div>

        <div className="mx-auto  w-fit mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-80 rounded-xl">
            Filter
          </button>
        </div>
      </form>

      {/* {error && (
        <h1 className="text-red-900 text-3xl">No Information Available</h1>
      )} */}
      {data && <Information info={data} err={error} />}
      {/* {data && <Table info={data} />}
      {error && !data && (
        <h1 className="text-red-900 text-3xl"> Information Available</h1>
      )} */}
    </>
  );
}

export default SearchBar;
