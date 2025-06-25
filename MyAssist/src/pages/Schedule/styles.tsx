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

const navbar1 = styled.View`
  background-color: #007bff;
`;

const navbar2 = styled.View`
  background-color: #007bff;
`;

const navbarLink = styled.Text`
 textDecorationLine: underline;
 color: #fff;
 font-size: 16px;
`;

const navbarTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const navbarTitle2 = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const hero = styled.View`
  margin-vertical: 50px;
  margin-horizontal: 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #ccc;
  height: 1000px;
`;

const heroTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-vertical: 20px;
  margin-horizontal: 20px;
  color: black;
`;

const heroText = styled.Text`
  font-size: 18px;
  margin-vertical: 12px;
  margin-horizontal: 20px;
  color: black;
`;

const heroInput = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  font-size: 18px;
  margin-horizontal: 20px;
  border-radius: 8px;
  padding: 12px;
  color: black;
`;

const heroInput2 = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  font-size: 18px;
  margin-horizontal: 20px;
  border-radius: 8px;
  padding: 12px;
  height:20%;
  textAlignVertical:top;
  color:black;
`;

const button = styled.Button`
  font-size: 18px;
  border-radius: 8px;
`;

const buttonView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  margin-horizontal: 18px;
  margin-vertical: 18px;
`;


const styles = {
  Container,
  navbar,
  navbar1,
  navbar2,
  navbarLink,
  navbarTitle,
  navbarTitle2,
  heroInput,
  heroInput2,
  hero,
  heroTitle,
  heroText,
  button,
  buttonView,
};

export default styles;
