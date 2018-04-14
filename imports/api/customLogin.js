// Library Imports
import {Accounts, STATES} from 'meteor/std:accounts-bootstrap';

// Class to customize the Accounts.ui.LoginForm Component.
export class CustomLogin extends Accounts.ui.LoginForm {
    fields() {
        const {formState} = this.state;
        if (formState == STATES.SIGN_UP) { // Display these additional inputs, if there is a sign up form
            return {
                ...super.fields(),
                firstName: {
                    id: 'firstName',
                    hint: 'Enter First Name',
                    label: 'First Name',
                    onChange: this.handleChange.bind(this, 'firstName')
                },
                lastName: {
                    id: 'lastName',
                    hint: 'Enter Last Name',
                    label: 'Last Name',
                    onChange: this.handleChange.bind(this, 'lastName')
                },
                gpa: {
                    id: 'gpa',
                    hint: 'Enter Overall GPA',
                    label: 'GPA',
                    onChange: this.handleChange.bind(this, 'gpa')
                },
                act: {
                    id: 'act',
                    hint: 'Enter ACT Score',
                    label: 'ACT',
                    onChange: this.handleChange.bind(this, 'act')
                },
                toefl: {
                    id: 'toefl',
                    hint: 'Enter TOEFL Score',
                    label: 'TOEFL',
                    onChange: this.handleChange.bind(this, 'toefl')
                },
                reading: {
                    id: 'reading',
                    hint: 'Enter SAT Reading Grade',
                    label: 'SAT Reading',
                    onChange: this.handleChange.bind(this, 'reading')
                },
                writing: {
                    id: 'writing',
                    hint: 'Enter SAT Writing Grade',
                    label: 'SAT Writing',
                    onChange: this.handleChange.bind(this, 'writing')
                },
                math: {
                    id: 'math',
                    hint: 'Enter SAT Mathematics Grade',
                    label: 'SAT Mathematics',
                    onChange: this.handleChange.bind(this, 'math')
                }
            };
        }
        return super.fields();
    }

    signUp(options = {}) { // on sign up, get the values from the above generated fields
        const {
            firstName = null,
            lastName = null,
            gpa = null,
            act = null,
            toefl = null,
            reading = null,
            writing = null,
            math = null
        } = this.state;

        options.profile = Object.assign(options.profile || {}, { // and add them to the profile
            firstName: firstName,
            lastName: lastName,
            gpa: gpa,
            act: act,
            toefl: toefl,
            reading: reading,
            writing: writing,
            math: math,
        });

        super.signUp(options);
    }
}