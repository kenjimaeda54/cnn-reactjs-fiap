import React from 'react';
import { BarNavigation } from '../BarNavigation';
import { Container } from './styles';

export default function Modal(): JSX.Element {
  return (
    <Container>
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
    </Container>
  );
}
