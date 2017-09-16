import React from 'react';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Form from 'components/Form';
import View from 'components/View';
import { LOCAL_STORAGE_KEYS } from 'utils/constants';
import './_Auth.scss';

export default class Auth extends React.Component {
  static get propTypes() {
    return { params: PropTypes.any };
  }

  get placeholderName() {
    const names = [
      'James Bond',
      'Luke Skywalker',
    ];
    return _.sample(names);
  }

  get title() {
    return 'What\'s your first name?';
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
        <Form
          className="Auth__Form"
          onSubmit={name => this.navigate(name)}
          onBack={browserHistory.goBack}
          backLabel="Back"
          placeholderCode
          submitLabel="Enter 🚪"
          placeholder={this.placeholderCode}
          label={this.title}
          value={window.localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME) || ''}
        />
      </View>
    );
  }
}
