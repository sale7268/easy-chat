export interface ChatUser {
  _id: string | number;
  name?: string;
}

export interface Message {
  _id: string;
  text: string;
  createdAt?: Date;
  user: ChatUser;
}

export interface ChatProps {
  messages: Message[];
  onSend: (messages: any[]) => void;
  user: ChatUser;
  keyboardShouldPersistTaps?: "always" | "never" | "handled";
  minInputToolbarHeight?: number;
  listViewProps?: any;
  renderBubble?: (message: any) => JSX.Element;
  renderInputToolbar?: (props: {
    onSend: (text: string) => void;
  }) => JSX.Element;
  chatTitle?: string;
  showTimestamp?: boolean;
}
