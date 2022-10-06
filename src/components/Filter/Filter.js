import { FilterWrap, Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlicer';
import PropTypes from 'prop-types';

export const Filter = e => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };
  return (
    <FilterWrap>
      <Label htmlFor="3">Find contacts by name</Label>
      <Input id="3" type="text" name="filter" onChange={handleChange} />
    </FilterWrap>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
