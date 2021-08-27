import React from 'react';
import { Container } from './styles';

interface SeparatorProps {
  color: string;
}

export function Separator({ color }: SeparatorProps): JSX.Element {
  return <Container color={color} />;
}
