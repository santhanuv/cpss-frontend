import { useState, useEffect } from "react";

const validateFormData = async (schema, formData) => {
  try {
    await schema.validate(formData, { abortEarly: false });
    return {};
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return currentErrors;
  }
};

const validateFormDataSync = (schema, formData) => {
  try {
    schema.validateSync(formData, { abortEarly: false });
    return {};
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return currentErrors;
  }
};

const useForm = (initValue = {}, schema) => {
  const [formData, setFormData] = useState(initValue);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      const currentErrors = validateFormDataSync(schema, formData);
      setErrors(currentErrors);
    }

    // Comment below disable the missing dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const resetFormData = () => {
    setFormData(initValue);
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e, callback) => {
    e.preventDefault();

    const errors = await validateFormData(schema, formData);
    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    const data = formData;
    return await callback(data);
  };

  const register = (name) => {
    return { name, value: formData[name], onChange };
  };

  return {
    onChange,
    onSubmit,
    register,
    resetFormData,
    errors,
<<<<<<< HEAD
=======
    validateFormData,
    validateFormDataSync,
>>>>>>> ee6af78 (laptop)
  };
};

export default useForm;
