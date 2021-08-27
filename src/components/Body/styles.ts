import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.p`
  font-size: 15px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

export const TextDate = styled(Date)``;

export const ContainerIgm = styled.div`
  width: 100%;
  padding: 4px 120px;
  margin-bottom: 20px;
`;

export const BodyImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ImgBody = styled.img`
  height: 120px;
  width: 120px;
  margin-right: 30px;
  @media (max-width: 602px) {
    display: none;
  }
`;

export const ContainerSection = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  padding-left: 70px;
  padding-right: 120px;
  @media (max-width: 602px) {
    padding: 10px;
  }
`;

export const TextTop = styled.p`
  font-size: 17px;
  line-height: 25px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const TextFooter = styled(TextTop)`
  margin: 20px 0px;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;
