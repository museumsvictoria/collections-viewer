import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import GridObject from '../components/GridObject';

class Grid extends React.Component {
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
            <GridObject
              key={object.id}
              id={object.id}
              thumbnail={object.images[0]}
            />
          ))}
      </Masonry>
    );
  }
}

Grid.propTypes = {
  objects: PropTypes.array.isRequired,
};

const mapState = ({ system }) => ({
  objects: system.objects,
});

export default connect(mapState)(Grid);
