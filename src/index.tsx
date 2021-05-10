import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/GlobalStyles';

import store from './store/store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root')
);