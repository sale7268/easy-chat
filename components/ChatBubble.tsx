import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChatBubbleProps {
  message: any;
  isCurrentUser: boolean;
  showTimestamp?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isCurrentUser,
  showTimestamp = true,
}) => {
  return (
    <View
      style={[
        styles.container,
        isCurrentUser ? styles.currentUser : styles.otherUser,
      ]}
    >
      <Text style={styles.text}>{message.text}</Text>
      {showTimestamp && (
        <Text style={styles.timestamp}>
          {new Date(message.createdAt).toLocaleTimeString()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  currentUser: {
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  otherUser: {
    backgroundColor: "grey",
    alignSelf: "flex-start",
  },
  text: {
    color: "white",
  },
  timestamp: {
    marginTop: 5,
    fontSize: 10,
    color: "#ccc",
  },
});

export default ChatBubble;
