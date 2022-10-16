import { useSelector, useDispatch } from 'react-redux';
import { LogOutBtn, UserBox, UserHeader } from './UserMenu.styled';
import { authSelectors } from '../../redux/auth';

import { authOperations } from '../../redux/auth';

const UserMenu = () => {
  const user = useSelector(authSelectors.selectUserName);
  const dispatch = useDispatch();
  return (
    <UserBox>
      <UserHeader>Hello, {user}</UserHeader>
      <LogOutBtn onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </LogOutBtn>
    </UserBox>
  );
};

export default UserMenu;
