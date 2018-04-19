import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css';
import GridItem from '../components/GridItem';

class ObjectGrid extends React.Component {
  render() {
    const { objects } = this.props;

    return (
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="object-grid"
        columnClassName="column"
      >
        {objects &&
          objects.map(object => (
            <GridItem key={object.id} id={object.id} media={object.media} />
          ))}
      </Masonry>
    );
  }
}

ObjectGrid.propTypes = {
  objects: PropTypes.array.isRequired,
};

function mapStateToProps({ system }) {
  return {
    objects: system.objects,
  };
}

export default connect(mapStateToProps, null)(ObjectGrid);
