import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 30px;
  font-style: italic;
  font-weight: bold;
  font-size: 32px;

  .active {
    color: #73cb3b;
  }
`;

export const AvatarContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0f0f0;
  cursor: pointer;
  position: relative;

  z-index: 10;
`;
