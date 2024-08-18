import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import { ChatProps } from "../types/ChatTypes";

const ChatWindow: React.FC<ChatProps> = ({
  messages,
  onSend,
  user,
  keyboardShouldPersistTaps = "handled",
  minInputToolbarHeight = 44,
  chatTitle,
  renderBubble,
  renderInputToolbar,
  showTimestamp = true,
}) => {
  const handleSend = (text: string) => {
    const newMessage = {
      _id: Math.random().toString(36).substring(7),
      text,
      createdAt: new Date(),
      user,
    };
    onSend([newMessage]);
  };

  const defaultRenderBubble = ({ item }: { item: any }) => {
    const isCurrentUser = item.user._id === user._id;
    return (
      <ChatBubble
        message={item}
        isCurrentUser={isCurrentUser}
        showTimestamp={showTimestamp}
      />
    );
  };

  const defaultRenderInputToolbar = () => {
    return <ChatInput onSend={handleSend} />;
  };

  const renderItem = ({ item }: { item: any }) => {
    const isCurrentUser = item.user._id === user._id;
    return renderBubble ? renderBubble(item) : defaultRenderBubble({ item });
  };

  return (
    <View style={styles.container}>
      {chatTitle && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{chatTitle}</Text>
        </View>
      )}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        inverted
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentContainerStyle={styles.list}
        {...(minInputToolbarHeight && { minHeight: minInputToolbarHeight })}
      />
      {renderInputToolbar
        ? renderInputToolbar({ onSend: handleSend })
        : defaultRenderInputToolbar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default ChatWindow;
