// Library Imports
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

// Importing the main App component to render it
import App from '../imports/ui/App.js';

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});