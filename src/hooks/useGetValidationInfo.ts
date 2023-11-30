import { useFormik } from "formik";
import * as Yup from "yup";

interface IUseGetValidationInfo {
  openSnackbar: () => void;
}

const useGetValidationInfo = ({ openSnackbar }: IUseGetValidationInfo) => {
  const initialValue = {
    name: "",
    loginEmail: "",
    message: "",
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    enableReinitialize: true,
    initialValues: initialValue,
    validationSchema: Yup.object().shape({
      loginEmail: Yup.string()
        .email("Invalid email")
        .matches(
          /^[A-Z0-9_%+-]+(\.[A-Z0-9_%+-]+)*@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Invalid email"
        )
        .required("Required"),
      name: Yup.string()
        .min(2, "Enter a message of 2 characters or more")
        .max(20, "The message should not contain more than 20 characters")
        .matches(
          /^((?:([a-zA-Z]+[\s'.-]*)+))$/,
          "Latin, space, hyphen, apostrophe, period allowed"
        )
        .required("Required"),
      message: Yup.string()
        .min(8, "Enter a message of 8 characters or more")
        .max(255, "The message should not contain more than 255 characters")
        .required("Required"),
    }),
    onSubmit: (_, actions) => {
      console.log("Sent");
      actions.resetForm();
      openSnackbar();
    },
  });
  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isSubmitting,
  };
};

export default useGetValidationInfo;
