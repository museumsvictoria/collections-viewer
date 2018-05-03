import React from 'react';
import PropTypes from 'prop-types';

export default class ObjectDetails extends React.Component {
  static propTypes = {
    object: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.object).isRequired,
      thumbnail: PropTypes.object.isRequired,
      content: PropTypes.arrayOf(PropTypes.string),
      subContent: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  render() {
    const { object } = this.props;

    return (
      <div className="object-details">
        <div className="images">
          <img
            src={object.images[0].medium.uri}
            alt={object.images[0].alternativeText}
          />
        </div>
        <div className="title">
          <h1>{object.title}</h1>
        </div>
        <div className="content">
          {object.content &&
            object.content.map((c, idx) => (
              <div key={idx} dangerouslySetInnerHTML={{ __html: c }} />
            ))}
        </div>
        <div className="sub-content">
          {object.subContent && (
            <div className="title">
              <h3>More Information</h3>
            </div>
          )}
          {object.subContent &&
            object.subContent.map((c, idx) => (
              <div key={idx} dangerouslySetInnerHTML={{ __html: c }} />
            ))}
        </div>
      </div>
    );
  }
}
