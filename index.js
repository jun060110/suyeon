const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '수연아 오이오이') {
    msg.reply('당근당근');
  }
  if (msg.content === '수연아 준형아') {
    msg.reply('사랑해');
  }
  if (msg.content === '수연아 김현민') {
    msg.reply('스켈레톤 달그닥달그닥');
  }
  if (msg.content === '수연아 가라') {
    msg.reply('하이드로펌프 우엥ㅇ겍게ㅔㄲ께ㅔ게게겍ㄱ');
  }
  if (msg.content === '수연아 INTJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885886832045330462/unknown.png');
  }
  if (msg.content === '수연아 INTP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885887247839289404/unknown.png');
  }
  if (msg.content === '수연아 ENTJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885887550982606878/unknown.png');
  }
  if (msg.content === '수연아 ENTP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888044018835486/unknown.png');
  }
  if (msg.content === '수연아 INFJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888277872275466/unknown.png');
  }
  if (msg.content === '수연아 INFP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888413327294476/unknown.png');
  }
  if (msg.content === '수연아 ENFJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888620152651866/unknown.png');
  }
  if (msg.content === '수연아 ENFP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888740420092014/unknown.png');
  }
  if (msg.content === '수연아 ISTJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885888938403835944/unknown.png');
  }
  if (msg.content === '수연아 ISFJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885889358824104007/unknown.png');
  }
  if (msg.content === '수연아 ESTJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885889233200484412/unknown.png');
  }
  if (msg.content === '수연아 ESFJ') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885889622264143943/unknown.png');
  }
  if (msg.content === '수연아 ISTP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885889764891430962/unknown.png');
  }
  if (msg.content === '수연아 ISFP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885889943556214895/unknown.png');
  }
  if (msg.content === '수연아 ESTP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885890183793369099/unknown.png');
  }
  if (msg.content === '수연아 ESFP') {
    msg.reply('https://cdn.discordapp.com/attachments/885881777292464161/885890400156524595/unknown.png');
  }
});

client.login('ODgxMTQwOTEyMDc0Mzk5NzY0.YSogbA.qr2aBGv5VOelepvYVUSJXuHzGH8'); 