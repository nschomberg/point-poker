import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import { sample } from 'utils';
import Form from 'components/Form';
import View from 'components/View';
import BackButton from 'components/BackButton';
import { LOCAL_STORAGE_KEYS } from 'utils/constants';
import './_Auth.scss';

export default class Auth extends React.Component {
  static get propTypes() {
    return { params: PropTypes.any };
  }

  get placeholderName() {
    const names = [
      'Alex',
      'Cheque',
      'Dean',
      'Ellie',
      'Jay',
      'Josh',
      'Lee',
      'Nico',
      'Rudy',
      'Tom',
      'Tony',
    ];
    return sample(names);
  }

  get title() {
    return 'What\'s your name?';
  }

  getRoomId() {
    return this.props.params.room;
  }

  navigate(name) {
    browserHistory.push(`/join/${this.getRoomId()}/${name}`);
  }

  render() {
    return (
      <View className="Auth">
        <div className="Auth__Content">
          <BackButton className="Form__BackButton" />
          <label
            className="Auth__Label"
            htmlFor="code"
          >
            {this.title}
          </label>
          <Form
            className="Auth__Form"
            onSubmit={name => this.navigate(name)}
            onBack={browserHistory.goBack}
            placeholderCode
            submitLabel="Enter"
            placeholder={this.placeholderName}
            value={window.localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME) || ''}
          />
        </div>
      </View>
    );
  }
}
