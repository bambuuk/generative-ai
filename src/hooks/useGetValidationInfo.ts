import { useFormik } from "formik";
import * as Yup from "yup";

interface IUseGetValidationInfo {
  openSnackbar: (type: string) => void;
}

export const useGetValidationInfo = ({
  openSnackbar,
}: IUseGetValidationInfo) => {
  const initialValue = {
    name: "",
    message: "",
    loginEmail: "",
    loginPassword: "",
    signUpEmail: "",
    signUpPassword: "",
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
      console.log("Sent message");
      actions.resetForm();
      openSnackbar("sendMessage");
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

interface IUseGetValidationLogInSignUp {
  openSnackbar: (type: string) => void;
  closeModal: () => void;
}

export const useGetValidationLogin = ({
  openSnackbar,
  closeModal,
}: IUseGetValidationLogInSignUp) => {
  const initialValue = {
    loginEmail: "",
    loginPassword: "",
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
      loginPassword: Yup.string()
        .min(8, "Minimum 8 symbols")
        .max(15, "Maximum 15 symbols")
        .required("Required"),
    }),
    onSubmit: (_, actions) => {
      console.log("Log In");
      actions.resetForm();
      openSnackbar("logIn");
      if (closeModal !== undefined) {
        closeModal();
      }
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

export const useGetValidationSignUp = ({
  openSnackbar,
  closeModal,
}: IUseGetValidationLogInSignUp) => {
  const initialValue = {
    signUpEmail: "",
    signUpPassword: "",
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
      signUpEmail: Yup.string()
        .email("Invalid email")
        .matches(
          /^[A-Z0-9_%+-]+(\.[A-Z0-9_%+-]+)*@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          "Invalid email"
        )
        .required("Required"),
      signUpPassword: Yup.string()
        .min(8, "Minimum 8 symbols")
        .max(15, "Maximum 15 symbols")
        .required("Required"),
    }),
    onSubmit: (_, actions) => {
      console.log("Sign Up");
      actions.resetForm();
      openSnackbar("signUp");
      if (closeModal !== undefined) {
        closeModal();
      }
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
