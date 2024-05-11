import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";

const newGroupChat = TryCatch(async (req, res, next) => {
  const { name, members } = req.body;

  if (members.length < 2) {
    return next(
      new ErrorHandler(
        "More than 2 members are required to form a group chat",
        400
      )
    );
  }

  const allMembers = [...members, req.user];

  await Chat.create({
    name,
    groupChat: true,
    creator: req.user,
    members: allMembers,
  });

  emitEvent(req,ALERT,allMembers,`Welcome to ${name} group`)
  emitEvent(req,REFETCH_CHATS,members)

  return res.status(201).json({
    success: true,
    message: "Group chat created successfully",
  });

});
const getMyChat = TryCatch(async (req, res, next) => {
  const chats = await Chat.find({ members: req.user }).populate("members", "name avatar");

  return res.status(201).json({
    success: true,
    chats
  });

});

export { newGroupChat,getMyChat };
