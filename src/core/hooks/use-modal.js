import { useState, useCallback } from 'react';

const useModal = (initialState) => {
	const [ modalState, handleModal ] = useState(initialState);
	const openModal = ({ ...args }) => handleModal({ isOpen: true, ...args });
	const closeModal = ({ ...args }) => handleModal({ isOpen: false, ...args });
	return {
		modalState,
		openModal: useCallback(openModal, [ modalState, handleModal ]),
		closeModal: useCallback(closeModal, [ modalState, handleModal ])
	};
};

export default useModal;
