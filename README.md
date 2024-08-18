# easy-chat

A chat UI library for Expo projects built with React Native and TypeScript.

## Installation

```bash
npm install easy-chat
```

Usage

```javascript
import { ChatWindow } from "easy-chat";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const App = () => {
  const [messages, setMessages] = useState<any[]>([]);

  const handleSend = (newMessages: any[]) => {
    setMessages((previousMessages) => newMessages.concat(previousMessages));
  };

  return (
    <View style={styles.container}>
      <ChatWindow
        messages={messages}
        onSend={handleSend}
        user={{ _id: 1 }}
        chatTitle="Chat"
      />
    </View>
  );
};
```

## Components

<ChatWindow />
- messages: Array of messages.
- onSend: Function to handle sending messages.
- user: Current user object.
<ChatBubble />
- message: Message object.
- isCurrentUser: Boolean indicating if the message is from the current user.
<ChatInput />
- onSend: Function to handle sending a message.

## Hooks

useChat()
initialMessages: Array of initial messages.
Returns messages and onSend function.
vbnet
Copy code

### 6. `LICENSE`

Include the license for your package, such as the MIT License:

```plaintext
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[...]
```
