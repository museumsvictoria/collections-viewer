import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import ObjectThumbnail from '../components/ObjectThumbnail';

class Grid extends React.Component {
  static propTypes = {
    objects: PropTypes.array.isRequired,
  };

  render() {
    const { objects } = this.props;

    return (
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="grid"
        columnClassName="column"
      >
        {objects &&
          objects.map(object => (
            <ObjectThumbnail
              key={object.id}
              id={object.id}
              thumbnail={object.thumbnail}
            />
          ))}
      </Masonry>
    );
  }
}

const mapState = ({ system }) => ({
  objects: system.objects,
});

export default connect(mapState)(Grid);
