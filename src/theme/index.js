import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

// const theme = createMuiTheme({
// 	palette,
// 	typography
// });
const theme = createMuiTheme({
	palette,
	typography: {
	  fontFamily: [
		'Nunito',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'sans-serif'
	  ].join(','),
	}
  });
export default theme;
