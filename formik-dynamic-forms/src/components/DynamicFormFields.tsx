import React, { FC } from "react";
import { FormInputJson, InitialValueForm } from "../types/BasicDetails.types";
import { Field, FormikProps } from "formik";
import FieldErrorMessage from "./FieldErrorMessage";
import CustomField from "./CustomField";

type DynamicFormFieldsType = {
  key: string;
  field: FormInputJson;
  formProps: FormikProps<InitialValueForm>;
};

const DynamicFormFields: FC<DynamicFormFieldsType> = ({ field, formProps }) => {
  return (
    <div
      key={field.name}
      className="w-full flex flex-col justify-between items-start mb-3 px-5">
      {field.type === "radio" ? (
        // <RadioField field={field} />
        <h1>Radio</h1>
      ) : (
        <CustomField field={field} />
      )}
      <FieldErrorMessage name={field.name} />
    </div>
  );
};

export default DynamicFormFields;
