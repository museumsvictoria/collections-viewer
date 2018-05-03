import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, Transition } from 'transition-group';
import BodyClassName from 'react-body-classname';
import ObjectDetails from './ObjectDetails';

class ObjectModal extends React.Component {
  static propTypes = {
    activeObject: PropTypes.object,
  };
  static defaultProps = {
    activeObject: null,
  };

  render() {
    const { activeObject } = this.props;

    return (
      <TransitionGroup
        component="div"
        enterDuration={800}
        leaveDuration={500}
        prefix="fade"
      >
        {activeObject && (
          <Transition key={activeObject.id}>
            <BodyClassName className="modal-active" />
            <div className="object-modal">
              <ObjectDetails object={activeObject} />
            </div>
          </Transition>
        )}
      </TransitionGroup>
    );
  }
}

const mapState = ({ system }) => ({
  activeObject: system.activeObject,
});

export default connect(mapState)(ObjectModal);
