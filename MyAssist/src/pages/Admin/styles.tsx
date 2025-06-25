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

const headerImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const navbar1 = styled.View`
  background-color: #007bff;
  flex: 1;
  background-color: #007bff;
  flex-direction: row;
`;

const navbar2 = styled.View`
  background-color: #007bff;
`;

const navbarLink = styled.Text`
 textDecorationLine: underline;
  color: blue;
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

const SelectBox = styled.View`
   border-width: 1px;
   border-color: #ccc;
   border-radius: 8px;
   margin-horizontal: 20px;
   backgroundColor: 'lightblue;
`;

const hero = styled.View`
  margin-top: 50px;
  margin-horizontal: 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #ccc;
  height: 1300px;
`;

const hero2 = styled.View`
  margin-vertical: 50px;
  margin-horizontal: 12px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #ccc;
  height:300px;
`;

const heroTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-horizontal: 20px;
  color: black;
`;

const heroTitle2 = styled.Text`
  font-size: 24px;
  font-weight: normal;
  margin-top: 60px;
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
  color:black;
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

const heroInput3 = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  font-size: 16px;
  border-radius: 1px;
  height: 40px;
  width:220px;
  textAlignVertical:center;
  color:black;

`;

const button = styled.Button`
 alignSelf: flex-start;
`;

const buttonView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-horizontal: 18px;
  margin-vertical: 18px;
`;

const hiddenButtonView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-horizontal: 18px;
  margin-top: 18px;
  justify-content: space-between;
`;

const buttonView2 = styled.View`
  flex: 1;
  flex-direction: row;
  height: 40px;

`;

const buttonSearchView = styled.View`
    flex: 1;
    flex-direction: row;
    margin-horizontal: 18px;
    margin-vertical: 18px;
`;


const tableHeader = styled.View`
  flex: 1;
  flexDirection: row;
  margin-horizontal: 20px;
`;

const tableHeaderCell = styled.Text`
  textAlign:center;
  border-color: #ccc;
  font-weight: bold;
  border-width: 1px;
  textColor: black;
  font-size: 18px;
  background-color: #cfe2ff;
  padding: 10px;
  height: 50px;
  width: 150px;
`;

const tableRow = styled.View`
    flex: 1;
    flexDirection: row;
    margin-horizontal: 20px;
`;

const tableRowCell = styled.Text`
    textAlignVertical:center;
    textAlign:center;
    border-color: #ccc;
    border-width: 1px;
    font-size: 18px;
    background-color: white;
    padding: 10px;
    width: 150px;
    color:black;
`;

const tableRowCellAlter = styled.Text`
    textDecorationLine: underline;
    textAlignVertical:center;
    textAlign:center;
    border-color: #ccc;
    border-width: 1px;
    color: blue;
    font-size: 18px;
    background-color: white;
    padding: 10px;
    width: 150px;
`;

const tableView = styled.View`
    margin-vertical: 20px;
`;



const styles = {
  Container,
  tableView,
  navbar,
  headerImage,
  navbar1,
  navbar2,
  navbarLink,
  navbarTitle,
  navbarTitle2,
  heroInput,
  heroInput2,
  tableRowCellAlter,
  heroInput3,
  SelectBox,
  hero,
  hero2,
  heroTitle,
  heroTitle2,
  heroText,
  button,
  buttonView,
  hiddenButtonView,
  buttonView2,
  buttonSearchView,
  tableHeader,
  tableHeaderCell,
  tableRow,
  tableRowCell,
};

export default styles;
