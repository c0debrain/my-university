// Library Imports
import {Meteor} from 'meteor/meteor';
import '../imports/api/universities';
import {Accounts} from 'meteor/accounts-base';

// Setup custom user profile
Accounts.onCreateUser(function (options, user) {
    user.profile = options.profile || {};
    user.roles = {};
    return user;
});

Meteor.startup(() => {
    // code to run on server at startup
});
