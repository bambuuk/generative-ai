import { useState } from "react";
import { IModalType } from "../types/IModalType";

const useModalControl = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<IModalType>("logIn");

  const openModal = (value: string) => {
    setIsModalOpen(true);
    setModalType(value === "logIn" ? "logIn" : "signUp");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeModalType = (type: IModalType) => {
    setModalType(type);
  };

  return { isModalOpen, openModal, closeModal, modalType, changeModalType };
};

export default useModalControl;
