import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerMenu = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 50px;
  }
`;

export const ImgBody = styled.img`
  display: none;
  @media (max-width: 602px) {
    display: block;
    height: 120px;
    width: 120px;
    margin-right: 30px;
  }
`;

export const ButtonModal = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 5px;
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
  @media (max-width: 1200px) {
    display: none;
  }
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
  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 19px;
  }
`;

export const ContainerModal = styled.div`
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
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
  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const ImgAuthor = styled.img`
  height: 50px;
  width: 90px;
`;
