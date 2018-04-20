import React from 'react';
import PropTypes from 'prop-types';

export default class GridObject extends React.Component {
  render() {
    const { thumbnail } = this.props;

    return (
      <div className="grid-object">
        <img src={thumbnail.medium.uri} alt={thumbnail.alternativeText} />
      </div>
    );
  }
}

GridObject.propTypes = {
  thumbnail: PropTypes.object.isRequired,
};
