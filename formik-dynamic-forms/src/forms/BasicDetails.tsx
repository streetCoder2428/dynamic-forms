import React from "react";
import { Form, Formik, FormikProps } from "formik";
import useDynamicFormModal from "../hooks/useDynamicFormModal";
import { InitialValueForm } from "../types/BasicDetails.types";
import DynamicFormFields from "../components/DynamicFormFields";

const BasicDetails = () => {
  const { formFields, initialValues, validationSchema } = useDynamicFormModal();

  const handleCancel = (resetForm: (values: any) => void) => {
    resetForm(initialValues);
  };

  const handleSubmit = (values: InitialValueForm) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-80 border rounded-xl py-5 mt-3 text-center">
        <p className="text-md font-bold">Basic Information</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {(formProps: FormikProps<InitialValueForm>) => (
            <Form>
              {formFields.map((field, idx) => (
                <DynamicFormFields
                  key={field.label + field.name + idx}
                  field={field}
                  formProps={formProps}
                />
              ))}
              <div className="w-full gap-x-2">
                <button
                  className="h-10 py-2 px-6 bg-gray-300 text-white capitalize rounded-md"
                  onClick={() => handleCancel(formProps.resetForm)}>
                  Cancel
                </button>
                <button
                  className="h-10 py-2 px-6 bg-blue-800 text-white capitalize rounded-md"
                  type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BasicDetails;
