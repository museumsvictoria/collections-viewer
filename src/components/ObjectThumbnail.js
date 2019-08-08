import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link';

export default class ObjectThumbnail extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      uri: PropTypes.string.isRequired,
      alternativeText: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { id, thumbnail } = this.props;

    return (
      <div className="grid-object">
        <Link to={`/${id}`}>
          <img src={thumbnail.uri} alt={thumbnail.alternativeText} />
        </Link>
      </div>
    );
  }
}
