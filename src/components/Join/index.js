import React from 'react';
import { browserHistory } from 'react-router';

import { sample } from 'utils';
import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Form from 'components/Form';
import View from 'components/View';
import './_Join.scss';

export default class Join extends React.Component {

  get placeholderCode() {
    return 'Session Code';
  }

  get title() {
    return 'Join Existing Session';
  }

  get subtitle() {
    return '(or paste in the code of the room you want to join)';
  }

  navigate(room = this.generateRoom()) {
    browserHistory.push(`/join/${room}/?`);
  }

  generateRoom(length = 4) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let room = '';

    for (let i = 0; i < length; i += 1) {
      room += sample(alphabet);
    }

    return room;
  }

  render() {
    return (
      <View className="Join">
        <div className="Join__Layout">
          <BackButton className="Join__BackButton" />
          <div className="Join__Options">
            <div className="Join__Option Join__Option--New">
              <div className="Join__Heading Join__Heading--New">
                Create A New Session
              </div>
              <div className="Join__OptionContent">
                <Button onClick={() => this.navigate()}>
                  Create
                </Button>
              </div>
            </div>
            <div className="Join__Option Join__Option--Or">
              or
            </div>
            <div className="Join__Option Join__Option--Existing">
              <div className="Join__Heading Join__Heading--New">
                Join An Existing Session
              </div>
              <div className="Join__OptionContent">
                <Form
                  className="Join__Form"
                  onSubmit={room => this.navigate(room)}
                  onBack={browserHistory.goBack}
                  backLabel="Back"
                  placeholderCode
                  submitLabel="Join"
                  placeholder={this.placeholderCode}
                  label={this.title}
                  valueTransform={value => (value && value.toUpperCase())}
                />
              </div>
            </div>
          </div>
        </div>
      </View>
    );
  }
}
