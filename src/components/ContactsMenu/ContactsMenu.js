import { useSelector, useDispatch } from 'react-redux';
import { LogOutBtn, UserBox, UserHeader } from './ContactsMenu.styled';
import { authSelectors } from '../../redux/auth';
// import { Link } from 'react-router-dom';
import { authOperations } from '../../redux/auth';

const ContactsMenu = () => {
  const user = useSelector(authSelectors.selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Link to="/contacts">Contacts</Link> */}
      <UserBox>
        <UserHeader>Hello, {user}</UserHeader>
        <LogOutBtn onClick={() => dispatch(authOperations.logOut())}>
          Log Out
        </LogOutBtn>
      </UserBox>
    </>
  );
};

export default ContactsMenu;
