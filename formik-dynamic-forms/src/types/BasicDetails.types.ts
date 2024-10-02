export interface BasicDetailsInitialValues {
  fullName: string;
  email: string;
  phoneNumber: number;
}

export interface InitialValueForm extends BasicDetailsInitialValues {
  [key: string]: unknown;
}

export type FormInputJson = {
  name: string;
  label: string;
  type: string;
  labels?: RadioLabels[];
  placeholder?: string;
  defaultValue?: string | number | boolean | undefined;
  validation: FormValidation;
};

export type RadioLabels = {
  text: string;
  value: string | number | boolean;
};

export type FormValidation = {
  required: boolean;
  min?: number;
  max?: number;
};
