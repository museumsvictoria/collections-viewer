import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

export default class GridObject extends React.Component {
  render() {
    const { id, thumbnail } = this.props;

    return (
      <Link to={`/${id}`}>
        <div className="grid-object">
          <img src={thumbnail.uri} alt={thumbnail.alternativeText} />
        </div>
      </Link>
    );
  }
}

GridObject.propTypes = {
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
};
