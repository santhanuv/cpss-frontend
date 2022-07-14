import { useState } from "react";

const useForm = (initValue = {}) => {
  const [formData, setFormData] = useState(initValue);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e, callback) => {
    e.preventDefault();

    const data = formData;
    return await callback(data);
  };

  const register = (name) => {
    initValue[name] = "";
    return { name, value: formData[name], onChange };
  };

  return {
    onChange,
    onSubmit,
    register,
  };
};

export default useForm;
