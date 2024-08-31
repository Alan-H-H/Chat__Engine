import { MultiChatSocket, useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        "6fcdbe1a-45dd-4ab6-9ee3-675f3fd1658e",
         props.user.username, 
         props.user.secret)
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatSocket {...chatProps} />
      <PrettyChatWindow {...chatProps} />
    </div>
  );
};

export default ChatsPage;