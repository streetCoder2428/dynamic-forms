// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter Your Name",
      defaultValue: "",
      validation: {
        required: true,
        min: 1,
        max: 25,
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      defaultValue: "",
      validation: {
        required: true,
      },
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "number",
      placeholder: "Enter Your Phone Number",
      defaultValue: "",
      validation: {
        required: true,
        min: 10,
        max: 10,
      },
    },
  ],
};
