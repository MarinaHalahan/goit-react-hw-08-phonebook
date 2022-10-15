import { Header, Navigation } from './AppBar.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactsMenu from '../ContactsMenu/ContactsMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Header>
      <Navigation>
        <Link to="/contacts">Contacts</Link>
        {isLoggedIn ? <ContactsMenu /> : <AuthNav />}
      </Navigation>
    </Header>
  );
};

export default AppBar;
