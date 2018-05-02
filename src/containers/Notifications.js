import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as notificationActions from '../actions/notifications';

class Notifications extends React.Component {
  hideNotification = e => {
    const { actions } = this.props;

    e.stopPropagation();
    actions.hideNotification();
  };

  render() {
    const { notifications } = this.props;

    return (
      <div
        className={classnames(
          'notification',
          notifications.type,
          notifications.active ? 'show' : 'hide',
        )}
        onClick={this.hideNotification}
        onKeyDown={this.hideNotification}
      >
        {notifications.text}
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapState = ({ notifications }) => ({
  notifications,
});

const mapDispatch = dispatch => ({
  actions: bindActionCreators(notificationActions, dispatch),
});

export default connect(mapState, mapDispatch)(Notifications);
