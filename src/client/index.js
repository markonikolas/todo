// Font imports in "./stylesheets/base/_fonts.sass"

// Styles
import './stylesheets/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Todo from './components/Todo';

// Only files accepted here will be hot reloaded.
// When making changes in this file be sure to reload the page.
if ( module && module.hot ) {
	module.hot.accept();
}

ReactDOM.render(<Todo />, document.getElementById('app'));
