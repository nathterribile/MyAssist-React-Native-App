global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './package.json';

AppRegistry.registerComponent(appName, () => App);
