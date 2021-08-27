import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  height: 1px;
  background-color: ${({ color }) => color};
  margin: 30px 0;
`;
