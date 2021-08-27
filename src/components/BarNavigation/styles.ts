import styled, { css } from 'styled-components';

interface LinksContainerProps {
  haveCircle?: boolean;
}

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 0 20px;
  height: 100%;
`;

export const LinksContainer = styled.div<LinksContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  ${({ haveCircle }) =>
    haveCircle &&
    css`
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const Links = styled.a`
  cursor: pointer;
  font-size: 13px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.with};
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

export const Circle = styled.div`
  width: 12px;
  margin: 0 10px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.red};
`;
