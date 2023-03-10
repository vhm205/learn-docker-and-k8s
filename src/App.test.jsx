import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders headline', () => {
		render(<App />);

		screen.debug();

		// check if App components renders headline
	});
});
