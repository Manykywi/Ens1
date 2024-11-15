import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../../assets/avatar_user.jpg';
import GuestAvatar from '../../assets/guest.png';
import { useAuthContext } from '../../providers/AuthProvider';
import UserPanel from '../UserPanel/UserPanel';
import { AvatarContainer, Container, NavContainer } from './styles';

const Header = () => {
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(false);
  const { data: user } = useAuthContext();

  const onClose = () => {
    setIsUserPanelOpen(false);
  };

  const onOpen = () => {
    setIsUserPanelOpen(true);
  };

  return (
    <Container data-cy="header">
      <NavContainer>
        <NavLink to="/" data-cy="menu-link">
          Меню
        </NavLink>
        <NavLink to="/products" data-cy="products-link">
          Товари
        </NavLink>
        <NavLink to="/help" data-cy="help-link">
          Допомога
        </NavLink>
      </NavContainer>
      <AvatarContainer onClick={onOpen} data-cy="avatar">
        <img src={user ? Avatar : GuestAvatar} alt="user" />
      </AvatarContainer>
      {isUserPanelOpen && <UserPanel user={user} onClose={onClose} />}
    </Container>
  );
};

export default Header;
