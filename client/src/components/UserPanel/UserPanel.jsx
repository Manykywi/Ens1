import { useState } from 'react';

import { useAuthContext } from '../../providers/AuthProvider';
import { CloseButton, Input, Label, SignInButton, SignOutButton, UserPanelContainer } from './styles';

const UserPanel = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data, isLoading, isError, signOut, authenticate } = useAuthContext();

  const handleSubmit = () => {
    authenticate({ email, password });
  };

  const notAuthorizedSection = !data && (
    <>
      <div>
        <Label>Email</Label>
        <Input value={email} onChange={(event) => setEmail(event.target.value)} data-cy="email-input" />
      </div>
      <div>
        <Label>Пароль</Label>
        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          data-cy="password-input"
        />
      </div>
      <SignInButton onClick={handleSubmit} data-cy="sign-in-button">
        Sign In
      </SignInButton>
    </>
  );

  return (
    <UserPanelContainer data-cy="user-panel">
      <CloseButton onClick={onClose} data-cy="close-button">
        x
      </CloseButton>
      {isLoading && <p data-cy="loading">Loading...</p>}
      {isError && <p data-cy="error">Something went wrong...</p>}
      {data && <h2 data-cy="user-email">{data.email}</h2>}
      {notAuthorizedSection}
      {data && (
        <SignOutButton onClick={signOut} data-cy="sign-out-button">
          Sign Out
        </SignOutButton>
      )}
    </UserPanelContainer>
  );
};

export default UserPanel;
