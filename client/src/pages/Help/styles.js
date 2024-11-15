import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    margin-top: 50px;
    font-size: 96px;
    font-weight: 700;
  }
  img {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 15px;
  }
`;
export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 48px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Question = styled.div`
  font-weight: 500;
`;

export const PhoneNumber = styled.div`
  margin-top: 40px;
  text-align: center;
  font-weight: 600;
  width: 100%;
  font-size: 48px;
`;
