import React from 'react';
import { useTheme } from 'styled-components';
import { Separator } from '../components/Separator';
import { title, subTitle } from '../repository';
import Author from '../assets/author.png';
import {
  Container,
  ContainerNavigation,
  BodyContainer,
  Title,
  SubTitle,
  ImgAuthor,
  WrapsSubtitle,
} from './styles';
import { BarNavigation } from '../components/BarNavigation';
import { Body } from '../components/Body';

export function Home(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      <ContainerNavigation>
        <BarNavigation link={'Nacional'} haveCircle={true} />
        <BarNavigation link={'Business'} />
        <BarNavigation link={'Internacional'} />
        <BarNavigation link={'Saúde'} />
        <BarNavigation link={'Tecnologia'} />
        <BarNavigation link={'Esporte'} />
        <BarNavigation link={'Entreterimento'} />
        <BarNavigation link={'Estilo'} />
        <BarNavigation link={'Viagem & Gastronomia'} />
        <BarNavigation link={'Newsletters'} />
        <BarNavigation link={'Podcasts'} />
      </ContainerNavigation>
      <BodyContainer>
        <Title>{title}</Title>
        <Separator color={colors.gray} />
        <WrapsSubtitle>
          <SubTitle>{subTitle}</SubTitle>
          <ImgAuthor alt="" src={Author} />
        </WrapsSubtitle>
        <Separator color={colors.gray} />
        <Body />
      </BodyContainer>
    </Container>
  );
}
