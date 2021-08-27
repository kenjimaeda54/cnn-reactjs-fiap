import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerNavigation = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const BodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  padding: 30px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.black};
`;

export const WrapsSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  width: 100%;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
`;

export const ImgAuthor = styled.img`
  height: 50px;
  width: 90px;
`;
