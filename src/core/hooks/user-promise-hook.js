import { useReducer, useEffect } from 'react';

// hook for mananging Firebase promises, or any other promise

const states = {
	loading: 'loading',
	failure: 'failure',
	success: 'success'
};

function reducer(state, action) {
	switch (action.type) {
		case states.loading:
			return {
				...state,
				loading: true
			};
		case states.success:
			return {
				...state,
				loading: false,
				result: action.result
			};
		case states.failure:
			return {
				...state,
				loading: false,
				error: action.result
			};
		default:
			return state;
	}
}
export default function usePromise(promiseFn, { onSuccess, onFailure, isEffect = false, effectCondition = [] } = {}) {
	const initialState = {
		loading: false,
		result: undefined,
		error: undefined
	};
	const [ { error, result, loading }, dispatch ] = useReducer(reducer, initialState);
	const request = (...args) => {
		dispatch({ type: states.loading });
		promiseFn(...args)
			.then((response) => {
				dispatch({ type: states.success, result: response });
				onSuccess && onSuccess(response, args);
			})
			.catch((error) => {
				dispatch({ type: states.failure, result: error });
				onFailure && onFailure(error, args);
			});
	};

	useEffect(isEffect ? request : () => void 0, effectCondition);

	return {
		request,
		result,
		error,
		loading
	};
}
