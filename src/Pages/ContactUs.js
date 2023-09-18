import React from "react";
import { Button } from "react-bootstrap";

const ContactUs = () => {
  const [form, setForm] = React.useState("Submit");
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, number } = e.target.elements;
    let contactData = {
      name: name.value,
      email: email.value,
      number: number.value,
    };
    setForm("Submitting...");
    try {
      const response = await fetch(
        "https://react-http-db-df5cd-default-rtdb.firebaseio.com/contats.json",
        {
          method: "POST",
          body: JSON.stringify(contactData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setForm("Submit");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body">
    <div className="container  w-75" style={{marginTop:'20vh'}}>
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="number">
            Mobile No.
          </label>
          <input className="form-control" type="number" id="number" required />
        </div>
        <Button className="btn btn-dark" type="submit">
          {form}
        </Button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
