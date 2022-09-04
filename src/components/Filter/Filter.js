import { FilterWrap, Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => (
  <FilterWrap>
    <Label htmlFor="3">Find contacts by name</Label>
    <Input id="3" type="text" value={filter} onChange={changeFilter}></Input>
  </FilterWrap>
);

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};
