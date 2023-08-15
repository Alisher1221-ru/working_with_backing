import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import { ChakraProvider } from '@chakra-ui/react';
// import App from './App';
import TelegramBot from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    {/* <App/> */}
    <TelegramBot/>
  </ChakraProvider>
)