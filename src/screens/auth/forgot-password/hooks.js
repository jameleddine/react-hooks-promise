import { makeStyles } from '@material-ui/core/styles';
// import { usePromise } from 'core/hooks';
// import * as firebaseApi from 'core/api/firebase';
import { useHistory } from 'react-router-dom';

export const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	title: {
		textAlign: 'center'
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	paper_social: {
		display: 'flex'
	},
	social: {
		margin: theme.spacing(1)
	}
}));

export const useForgotPassword = () => {
	// const history = useHistory();
	// const { request, error, result, isLoading } = usePromise(firebaseApi.forgotPassword, {
	// 	onSuccess: () => {
	// 		history.push('/sign-in');
	// 	}
	// });

	// return {
	// 	isForgotPassword: isLoading,
	// 	error: error,
	// 	result,
	// 	forgotPassword: (data) => {
	// 		request(data.email);
	// 	}
	// };
};
