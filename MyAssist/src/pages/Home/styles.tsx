import styled from 'styled-components/native';

const Container = styled.Container`
  flex: 1;
  background-color: #fff;
`;

const navbar = styled.navbar`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  background-color: #007bff;
`;

const navbarTitle = styled.navbarTitle`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const navbarLink = styled.navbarLink`
  color: #fff;
  font-size: 16px;
`;

const hero = styled.hero`
  padding: 16px;
  align-items: center;
`;

const heroTitle = styled.heroTitle`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const heroText = styled.heroText`
  font-size: 16px;
  text-align: center;
  margin-vertical: 8px;
`;

const servicesTitle = styled.Container`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const services = styled.content`
  padding: 16px;
`;

const styles = {
  Container, navbar, navbarTitle, navbarLink, hero, heroTitle, heroText, services, servicesTitle,
};

export default styles;
