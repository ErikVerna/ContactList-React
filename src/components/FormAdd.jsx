import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", number: "" });

  const { name, number } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuidv4().split("-")[0],
      name,
      number,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container">
        <label className="mx-1 d-grid gap-2">
          Name:{" "}
          <input
            onChange={handleChange}
            name="name"
            value={name}
            type="text"
            className="form-control"
            autoComplete="off"
            placeholder="Type name"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Number:{" "}
          <input
            onChange={handleChange}
            name="number"
            value={number}
            type="number"
            className="form-control"
            autoComplete="off"
            placeholder="Type number"
          />
        </label>
        <div className="mx-1 d-grid gap-2">
          <button onClick={handleAdd} className="btn btn-success mt-4">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FormAdd;
