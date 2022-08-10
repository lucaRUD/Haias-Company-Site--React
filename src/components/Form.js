import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import { useEffect, useState } from "react";
import Axios from "axios";
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const submitForm = () => {
    Axios.post("http://localhost:3000/api/insert", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_num: phone_num,
      text: text,
    }).then(() => {
      alert("succesfull insert");
    });
  };
  console.log(watch("example")); // watch input value by passing the name of it

  const [first_name, setfirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_num, setphoneNum] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
          onChange={(e) => {
            setphoneNum(e.target.value);
          }}
        />
        <textarea
          className="inputmessage"
          placeholder="Type Here..."
          {...register("Message", {})}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <input onClick={submitForm} type="submit" />
      </form>
    </>
  );
}
