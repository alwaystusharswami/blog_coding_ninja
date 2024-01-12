import { useState } from "react";

export default function useFormInput(i) {
  const [value, setValue] = useState(i);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}
