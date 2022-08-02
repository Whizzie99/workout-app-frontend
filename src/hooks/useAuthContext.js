import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw Error(`useAuthCntext must be used inside an AuthtContextProvider`);
	}

	return context;
};
