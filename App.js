import React from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import AuthReducer from './Reducers/AuthReducer';
import Entry from './index';

const store = createStore(
  	combineReducers({
    	auth: AuthReducer
  	})
)

class App extends React.Component {
  	render() {
    	return (
      		<Provider store={store}>
        		<Entry />
      		</Provider>
    	)
  	}
}

export default App;