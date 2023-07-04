const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

// 발급 받은 token
const token = process.env.BOT_TK;

// '폴링'을 사용하여 새 업데이트를 가져오는 봇 만들기
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/^내놔/, (msg, match) => {
  // 'msg' : 텔레그램에서 수신한 메시지
  // 'match' :   텍스트 내용에 대해 위의 regexp를 실행한 결과
  const chatId = msg.chat.id;
  /* const resp = match.input; // the captured "whatever" */
  console.log(match.input)
  let resp = '';
  // if (match.input === '안녕') return bot.sendMessage(chatId, '반가워');
  // if (match.input === '너는 누구니') return bot.sendMessage(chatId, '봇.');
  // if (match.input === '잘가') return bot.sendMessage(chatId, 'ㅂ2');
  // if (match.input === '봇 바보') return bot.sendMessage(chatId, '반사');
  // if (match.input === '잘했어') return bot.sendMessage(chatId, 'ㄸㅋ');
  if (match.input === '내놔')
    return bot.sendAnimation(chatId,'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F034%2F2015%2F09%2F02%2F201509021140061502_img_1_99_20150902115110.gif&type=sc960_832_gif'
    );
});

bot.onText(/^네이버 음악차트/, (msg, match) => {
  const chatId = msg.chat.id;
  if (match.input === '네이버 음악차트') {
    return axios
      .get(
        'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%84%A4%EC%9D%B4%EB%B2%84+%EC%9D%8C%EC%95%85'
      )
      .then((response) => {
        console.log(response);
        const songs = [];
        let songText = '';
        const $ = cheerio.load(response.data);

        $('.music_list .tit').each(function () {
          songs.push($(this).text());
        });

        console.log(songs);
        songs.forEach((song, i) => {
          songText += `${i + 1}위 - ${song}\n`;
        });
        bot.sendMessage(chatId, songText);
      });
  }
});

bot.onText(/^야/, (msg, match) => {
  const chatId = msg.chat.id;

  if (match.input === '야') return bot.sendMessage(chatId, '뭐');
});

bot.onText(/^gif 어떻게 해/, (msg, match) => {
  const chatId = msg.chat.id;

  if (match.input === 'gif 어떻게 해') return bot.sendMessage(chatId, 'bot.sendAnimation() 써라');
});


bot.onText(/^가위바위보/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "셋 중에 하나 골라보소", {
    reply_markup: {
     keyboard: [['가위'], ['바위'],['보']]
    }
   });
});


bot.onText(/^가위/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "바위");})

  bot.onText(/^바위/, (msg) => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, "보");})
  
  bot.onText(/^보/, (msg) => {
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, "가위");})
  
  

//모든 메시지를 듣는다. 메시지에 다양한 종류가 있음
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  //   console.log(msg)

  console.log(msg);
  // 메시지 수신을 확인하는 메시지를 채팅에 보냄
  // bot.sendMessage(chatId, '');
});
