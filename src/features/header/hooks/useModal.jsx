import { useRef } from "react";

export const useModal = () => {
    const isModalOpen = useRef(null);

    const showModal = () => {
        isModalOpen.current.showModal();
    }
    
    const closeModal = () => {
        isModalOpen.current.close();
    }

    return {showModal,closeModal,isModalOpen}
}