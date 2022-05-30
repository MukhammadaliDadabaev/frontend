import { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contact, setContact] = useState({
    name: "",
    descr: "",
    number: "",
  });

  const changHandle = (e) => {
    const { name, value } = e.target;
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const { name, descr, number } = contact;
    const newContact = { name, descr, number };
    axios.post("http://localhost:1950/newContact", newContact);
    toast.success("Contact student was added succesfully...👏");
    setContact({
      name: "",
      descr: "",
      number: "",
    });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <form className="w-50 m-auto mt-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            value={contact.name}
            onChange={changHandle}
          />
        </div>
        <div classNam="mb-3">
          <label htmlFor="descr" className="form-label">
            Description
          </label>
          <input
            name="descr"
            type="text"
            className="form-control"
            id="descr"
            value={contact.descr}
            onChange={changHandle}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="number">
            Enter Your Number
          </label>
          <input
            name="number"
            type="number"
            className="form-control"
            id="number"
            value={contact.number}
            onChange={changHandle}
          />
        </div>
        <button onClick={submitHandle} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
