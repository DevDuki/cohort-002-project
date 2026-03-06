import { MyMessage } from "./api/chat/route";

export const messagePartsToText = (parts: MyMessage["parts"]) => {
  return parts
    .map((part) => {
      if (part.type === "text") {
        return part.text;
      }
    })
    .filter((s) => typeof s === "string")
    .join("\n");
};

export const messageToText = (message: MyMessage) => {
  return `${message.role}: ${messagePartsToText(message.parts)}`;
};

export const messageHistoryToQuery = (messages: MyMessage[]) => {
  const mostRecentMessage = messages[messages.length - 1];

  return [...messages, mostRecentMessage].map(messageToText).join("\n");
};
