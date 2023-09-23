import TelegramBot from "node-telegram-bot-api";
import Config from "config";
import { logger } from "./helpers/loggers";
import { Response } from "./constants";

const TOKEN: string = Config.get("bot.token") || "xxxxxxxx";
const bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/start/, (msg, _) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, Response.WELCOME);
});

bot.on('message', (msg) => {
  console.log(`[RECEIVED] - ${msg.text}`);
  if (msg.text === "/start") {
    return;
  }
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
