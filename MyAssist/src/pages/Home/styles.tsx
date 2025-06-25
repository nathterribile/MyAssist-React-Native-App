import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const navbar = styled.View`
  flex: 1;
   background-color: #007bff;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 30px;
`;

const navbarTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const navbarLink = styled.Text`
 textDecorationLine: underline;
 color: #fff;
 font-size: 16px;
`;

const hero = styled.View`
  padding: 16px;
  align-items: center;
`;

const heroTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

const heroText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-vertical: 8px;
  color: black;
`;

const servicesTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  color: black;
`;

const services = styled.View`
  padding: 16px;
`;

const image = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 8px;
`;

const styles = {
  Container,
  navbar,
  navbarTitle,
  navbarLink,
  hero,
  heroTitle,
  heroText,
  services,
  servicesTitle,
  image,
};

export default styles;
