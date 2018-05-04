import React from 'react';
import PropTypes from 'prop-types';

export default class ObjectImages extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        alternativeText: PropTypes.string,
        caption: PropTypes.string,
        mediumUri: PropTypes.string.isRequired,
        largeUri: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { images } = this.props;

    return (
      <div className="images">
        <img
          src={images[0].mediumUri}
          alt={
            images[0].alternativeText
              ? images[0].alternativeText
              : images[0].caption
          }
        />
      </div>
    );
  }
}
