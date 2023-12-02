import { useState } from "react";

const useModalControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>("logIn");

  const openModal = (value: string) => {
    setIsModalOpen(true);
    setModalType(value === "logIn" ? "logIn" : "signUp");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("logIn");
  };

  return { isModalOpen, openModal, closeModal, modalType };
};

export default useModalControl;
