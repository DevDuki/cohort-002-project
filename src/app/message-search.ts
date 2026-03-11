import { MyMessage } from "@/app/api/chat/route";
import { searchWithEmbeddings } from "@/app/search";
import { messageHistoryToQuery, messageToText } from "@/app/utils";

export const searchMessages = async (opts: {
  recentMessages: MyMessage[];
  olderMessages: MyMessage[];
}) => {
  if (opts.olderMessages.length === 0) {
    return [];
  }

  const query = messageHistoryToQuery(opts.recentMessages);

  return await searchWithEmbeddings(
    query,
    opts.olderMessages,
    messageToText
  );
};
