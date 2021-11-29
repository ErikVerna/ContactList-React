import React, { useEffect, useReducer, useState } from "react";
import { ContactsReducer } from "../reducers/ContactsReducer";
import FormAdd from "./FormAdd";
import TableContacts from "./TableContacts";

const init = () => {
  const data = localStorage.getItem("contacts");
  console.log(data);
  return data ? JSON.parse(data) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-3">
      <button
        className="btn btn-dark mt-2"
        onClick={() => setFormView(!formView)}
      >
        {!formView ? "+ Add Contacts" : "- Close Form"}
      </button>
      {formView && <FormAdd dispatch={dispatch} />}

      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;
