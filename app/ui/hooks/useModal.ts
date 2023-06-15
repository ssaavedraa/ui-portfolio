import { useState } from 'react';

interface ModalHook {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): ModalHook => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
