import React from 'react';

import BannerImg from '../../assets/HelpBanner.jpg';
import { BannerContainer, Column, Container, PhoneNumber, Question } from './styles';

const questions = [
  'Як авторизуватись?',
  'Що таке бронь?',
  'Безпека моїх даних',
  'Що таке сьогознижки?',
  'Товари і їх якість',
  'Актуальна інформація',
];

const renderQuestions = (questions) => questions.map((question, index) => <Question key={index}>{question}</Question>);

export default function Help() {
  return (
    <>
      <BannerContainer>
        <h1>Виникли якісь питання?</h1>
        <img src={BannerImg} alt="help img" />
      </BannerContainer>
      <Container data-cy="questions-container">
        <Column>{renderQuestions(questions.slice(0, 3))}</Column>
        <Column>{renderQuestions(questions.slice(3, 6))}</Column>
      </Container>
      <PhoneNumber data-cy="help-number">Дзвінок оператору +380 50 448 42 33</PhoneNumber>
    </>
  );
}
