import { ErrorMessage } from "formik";
import React, { FC } from "react";

type FieldErrorTypes = {
  name: string;
};

const FieldErrorMessage: FC<FieldErrorTypes> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-sm text-red-600 mt-2 capitalize"
    />
  );
};

export default FieldErrorMessage;
