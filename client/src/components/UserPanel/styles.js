import styled from 'styled-components';

export const UserPanelContainer = styled.div`
  position: absolute;
  top: 0px;
  right: -130px;
  padding: 80px 20px 20px;
  height: 300px;
  width: 300px;
  font-size: 24px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    text-align: center;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: red;
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  display: block;
`;

export const SignOutButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  align-self: center;
`;

export const SignInButton = styled.button`
  background-color: #73cb3b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 14px;
  cursor: pointer;
  font-size: 18px;
  align-self: center;
  margin-top: 10px;
`;
