import { Header, Navigation } from './AppBar.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Header>
      <Navigation>
        {isLoggedIn && <Link to="/contacts"></Link>}

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Navigation>
    </Header>
  );
};

export default AppBar;
