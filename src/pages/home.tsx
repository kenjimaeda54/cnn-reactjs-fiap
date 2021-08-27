import React, { useState, Fragment } from 'react';
import { useTheme } from 'styled-components';
import { Separator } from '../components/Separator';
import { title, subTitle } from '../repository';
import { BarNavigation } from '../components/BarNavigation';
import { Body } from '../components/Body';
import Logo from '../assets/logo.svg';
import {
  Container,
  ImgBody,
  ContainerModal,
  ContainerMenu,
  ContainerNavigation,
  BodyContainer,
  Title,
  ButtonModal,
  SubTitle,
  ImgAuthor,
  WrapsSubtitle,
} from './styles';
import Author from '../assets/author.png';
import Menu from '../assets/menu.svg';
import Modal from '../components/modal';

export function Home(): JSX.Element {
  const { colors } = useTheme();
  const [isOpen, setIsOPen] = useState(false);

  function openModal() {
    setIsOPen((oldState) => !oldState);
  }

  return (
    <Container>
      <ContainerMenu>
        <ButtonModal onClick={openModal}>
          <img src={Menu} />
        </ButtonModal>
        <ImgBody src={Logo} />
      </ContainerMenu>
      {isOpen ? (
        <ContainerModal>
          <Modal />
        </ContainerModal>
      ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Container>
  );
}
