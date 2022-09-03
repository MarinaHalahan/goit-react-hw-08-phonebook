import PropTypes from 'prop-types';
import { TitlePhonebook } from './Title.styled';

export const Title = ({ title }) => {
  return <TitlePhonebook>{title}</TitlePhonebook>;
};

Title.propTypes = {
  title: PropTypes.string,
};
