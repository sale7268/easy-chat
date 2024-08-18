import { useState } from "react";

export const useChat = (initialMessages: any[] = []) => {
  const [messages, setMessages] = useState(initialMessages);

  const onSend = (newMessages: any[]) => {
    setMessages((previousMessages) => [...newMessages, ...previousMessages]);
  };

  return {
    messages,
    onSend,
  };
};
