import React, { FC, useRef } from "react";
import { FormInputJson, InitialValueForm } from "../types/BasicDetails.types";
import { Field, FormikProps } from "formik";

type CustomFieldTypes = {
  field: FormInputJson;
};

const CustomField: FC<CustomFieldTypes> = ({ field }) => {
  return (
    <>
      <label
        htmlFor={field.name}
        className="text-lg font-medium capitalize mb-1">
        {field.label}
      </label>
      <Field
        id={field.name}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        className="pl-2 pb-1 pt-2 w-full rounded-md border border-gray-400 ring-0 focus:outline-none focus:border-gray-600 focus:ring-0"
      />
    </>
  );
};

export default CustomField;
