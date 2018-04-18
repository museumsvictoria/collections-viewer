import React from 'react';
import PropTypes from 'prop-types';

export default class GridItem extends React.Component {
  render() {
    const { media } = this.props;

    return (
      <div className="grid-item">
        <img src={media.medium.uri} alt={media.alternativeText} />
      </div>
    );
  }
}

GridItem.propTypes = {
  id: PropTypes.string.isRequired,
  media: PropTypes.object.isRequired,
};
