import { Box, Button, Input } from "@chakra-ui/react"
import React, { useState } from 'react';
import axios from 'axios';

    const TelegramBot = () => {
    const [message, setMessage] = useState('');

    const handleInput = (e) => {
      setMessage(e.target.value);
    };

    const sendMessage = () => {
    const chat_id = 'https://t.me/MsI3455'; // ID вашей группы в Telegram
    const url = `https://t.me/MsI3455/botYOUR_BOT_TOKEN/sendMessage?chat_id=${chat_id}&text=${message}`;

    axios.get(url)
      .then(() => {
        console.log('Message sent!');
        setMessage('');
      })
      .catch((err) => {
        console.error(err);
    });
    console.log(url);
    setMessage("")
    };

    return(
        <Box bg={"gray.600"} h={"100vh"} w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Input placeholder='text' bg={"whitesmoke"} size={"md"} w={"50%"} onChange={handleInput} value={message} />
            <Button variant={"solid"} onClick={sendMessage}>click</Button>
        </Box>
    )
    }
    export default TelegramBot;
