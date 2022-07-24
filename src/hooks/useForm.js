import { useState, useEffect } from "react";

const validateFormData = async (schema, formData, options = {}) => {
  try {
    const validatedData = await schema.validate(formData, {
      abortEarly: false,
      ...options,
    });
    return { data: validatedData };
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return { errors: currentErrors };
  }
};

const validateFormDataSync = (schema, formData) => {
  try {
    const data = schema.validateSync(formData, { abortEarly: false });

    return {};
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return currentErrors;
  }
};

const useForm = (initValue = {}, schema, activeFields = []) => {
  const [formData, setFormData] = useState(initValue);
  const [errors, setErrors] = useState({});
  const requiredSchema = schema && schema.pick(activeFields);

  useEffect(() => {
    (async () => {
      if (Object.keys(errors).length !== 0) {
        const { errors: currentErrors, data } = await validateFormData(
          requiredSchema,
          formData
        );

        if (data) setFormData(data);

        setErrors(currentErrors || {});
      }
    })();

    // Comment below disable the missing dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const resetFormData = () => {
    setFormData(initValue);
  };

  const onChange = (e, targetObject = null) => {
    const { name, value } = targetObject || e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e, callback) => {
    e.preventDefault();

    const { errors, data } = await validateFormData(schema, formData);
    const currentErrors = errors || {};
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length !== 0) return;

    setFormData(data);
    return await callback(data);
  };

  const register = (name) => {
    return { name, value: formData[name], onChange };
  };

  const isSubmitReady = (feilds = []) => {
    if (Object.keys(errors).length !== 0) return false;

    for (const index in feilds) {
      if (!formData[feilds[index]]) return false;
    }
    return true;
  };

  const onNextValidate = async (callback) => {
    const { errors, data } = await validateFormData(requiredSchema, formData);
    const currentErrors = errors || {};
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length !== 0) return;

    setFormData(data);
    callback(data);
  };

  return {
    onChange,
    onSubmit,
    register,
    resetFormData,
    errors,
    formData,
    validateFormData,
    validateFormDataSync,
    isSubmitReady,
    onNextValidate,
    setErrors,
  };
};

export default useForm;
