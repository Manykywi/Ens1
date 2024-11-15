import styled from 'styled-components';

import backgroundImage from '../../assets/Main_picture.png';

export const MainContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center fixed;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  backdrop-filter: blur(4px);
`;
