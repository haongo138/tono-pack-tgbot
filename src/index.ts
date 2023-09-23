import TelegramBot from "node-telegram-bot-api";
import Config from "config";
import { logger } from "./helpers/loggers";
import Constant from "./constants";
import Service from "./services";

const TOKEN: string = Config.get("bot.token") || "xxxxxxxx";
const bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/start/, async (msg, _) => {
  const chatId = msg.chat.id;
  const data = await Service.Binance.getTokenAvgPrice("BNBUSDT");
  console.log(data);
  bot.sendMessage(chatId, Constant.System.getWelcomeMessage("BSC", 300, 3));
});

bot.on('message', (msg) => {
  console.log(`[RECEIVED] - ${msg.text}`);
  if (msg.text === "/start") {
    return;
  }
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
