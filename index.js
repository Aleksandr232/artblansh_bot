const { Telegraf, Markup, Composer, } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const commBot = require("./const");
const webPort = 'https://newportfolio-sooty-kappa.vercel.app/'


bot.start(async (ctx)=>{
    await ctx.replyWithHTML(
        `Итак, друзья!✨ У нас теперь есть телеграмм-бот, ура!❤️‍🩹\n
        « Творить- значит выражать то, что есть в тебе» Анри Матисс.\n Привет ${
          ctx.message.from.first_name ? ctx.message.from.first_name : ""
        }, на связи студия Artblanshe и это пост знакомства.\n
        Мы считаем что эмоции - это сама сильная энергия в мире.
        Эмоции как инструменты в наших руках: поднимают мотивацию, физическую силу, концентрацию,наблюдательность и многое другое. \n
        Эмоции прекрасны, увы, в мире сложилось мнение что они могут быть излишними, что их нужно спрятать и никому не показывать.\n 
        Мы считаем иначе) для нас - это проявление силы, способ раскрепощения, пути к лёгкости,высвобождения своего истинного я. \n
        Чтобы раскрыть этот потенциал нужно высвобождать эмоции, делится ими или выплескивать на чём-то. Именно с этой идеей мы создали проект Art Blanshe - свобода через искусство. \n
        Нам наскучили банальные картины и техники исполнения, мы подготовили новый формат рисовки и впечатляющие, уникальные работы, которые сможет нарисовать каждый.`
      );
})

bot.hears("Добрый день", (ctx)=>ctx.reply(`Привеству, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""}`))
bot.hears("Привет", (ctx)=>ctx.reply(`Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : ""} на связи Art Blansh✨`))

bot.help((ctx) => ctx.reply(commBot.commands));
bot.command("coder", async (ctx) => {
  try {
    await ctx.replyWithContact("+79991625236", "Саша");
    await ctx.replyWithHTML('<b>Портфолио</b>', Markup.inlineKeyboard([
      [
        Markup.button.webApp("Личный сайт💻", webPort),
      ],  
    ]))
  } catch (e) {
    console.error(e);
  }
});

bot.launch();


// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
