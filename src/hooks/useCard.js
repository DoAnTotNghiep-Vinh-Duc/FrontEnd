import { useState } from "react";
import validateCard from "../validate/validateCard";

export default function useCard() {
  const [values, setValues] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const [error, setError] = useState({});

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateCard(values));
  };

  return { handleFocus, handleChange, handleSubmit, values, error };
}
