import PropTypes from 'prop-types';
import AnimalItems from './AnimalItems';

const AnimalList = ({ animals }) => {
    if (animals.length === 0) {
        return <h3>アニマルが見つかりません。</h3>;
    }
    return (
        <ul>
        {animals
          .map((animal) => {
            return <AnimalItems key={AnimalItems} animal={animal}/>;
          })}
      </ul>);
}

AnimalList.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnimalList;

