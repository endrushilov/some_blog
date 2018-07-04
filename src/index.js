import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/combine.js';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import About from './components/about';
import Contacts from './components/contacts';
import Header from './components/header';
import Footer from './components/footer';
import Postone from './components/postone';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div className="App">
				<Header/>
				<Route exact={true}  path="/" component={App}/> 
			    <Route  path="/about" component={About}/> 
	        	<Route  path="/contacts" component={Contacts}/> 
	        	<Route  path="/posts/" component={Postone}/> 
	        	<Footer/>
			</div>
		</Router>        
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
