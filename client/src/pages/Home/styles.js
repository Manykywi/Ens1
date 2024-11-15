import styled from 'styled-components';

import BannerImg from '../../assets/banner_energy.webp';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  margin-top: 40px;
`;
export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background: url(${BannerImg}) center center/cover;
  border-radius: 10px;
`;
