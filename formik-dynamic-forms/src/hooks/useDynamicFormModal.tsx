import React, { useState } from "react";
import { getFormConfig } from "../utils";
import { FormInputJson, InitialValueForm } from "../types/BasicDetails.types";
import * as Yup from "yup";

const generateValidationSchema = (formFields: FormInputJson[]) => {
  const shape: Yup.ObjectShape = {};

  formFields.map((formField: FormInputJson) => {
    let validator = Yup.string();

    //required field validator
    if (formField.validation.required) {
      validator = validator.required(`${formField.label} is Required`);
    }

    //minimum legnth validator
    if (formField.validation.min !== undefined) {
      validator = validator.min(
        formField.validation.min,
        `Minimum length for ${formField.label} ${formField.validation.min}`
      );
    }

    //maximum legnth validator
    if (formField.validation.max !== undefined) {
      validator = validator.max(
        formField.validation.max,
        `Minimum length for ${formField.label} ${formField.validation.min}`
      );
    }
    shape[formField.name] = validator;
  });
  return Yup.object().shape(shape);
};

const useDynamicFormModal = () => {
  const [formFields, setFormFields] = useState(getFormConfig());

  //validation schema
  const validationSchema = generateValidationSchema(formFields);

  //initial values
  const initialValues = formFields.reduce((acc, field) => {
    acc[field.name] =
      field.defaultValue !== undefined
        ? field.defaultValue
        : field.type === "text" || field.type === "radio"
        ? ""
        : 0;

    return acc;
  }, {} as InitialValueForm);

  console.log(initialValues);

  return {
    formFields,
    initialValues,
    validationSchema,
  };
};

export default useDynamicFormModal;
