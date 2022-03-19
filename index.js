const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const port = 3000;
client.on('debug', console.log)
app.get('/', (req, res) => res.send('hehe'));
app.listen(port, () => console.log('Listening at http://localhost:' + port))
client.login(process.env.TOKEN)

//////////////////////////////////////

client.on('message',function(message){
  if (message.content.startsWith('!restart')&&message.member.hasPermission('ADMINISTRATOR')){
    message.channel.send('Restarting bot... dont worry, the bot will only be offline for a couple seconds. If the bot is not responding to **!test-ping-restart** please contact Austin.')
    client.user.setActivity('Rebooting...',{type:'PLAYING'})
    client.destroy()
    client.login(process.env.TOKEN)
  }
})

client.on('message',function(message){
  if (message.content.startsWith('!test-ping-restart')){
    message.channel.send('Alive!')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('hat sauce')){
    message.channel.send('its better with chips')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('<:vibepepe:952692336251506738>')){
    message.channel.send('We chillin`')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('<:sadgepray:952692336192794654>')){
    message.channel.send('<:pepecry:952692336054370334> Pray :(')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('🐱‍🚀')){
    message.channel.send('sus emoji')
  }
})

client.on('message', message => { if (message.content === '!ping') { message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`); } });

client.on('message',function(message){
  if (message.content.startsWith('!define fuck')){
    message.channel.send('verb: to have sex with (someone). noun: an act or instance of having sex.   If you say "fuck you", you are saying I want to have sex with you.')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('You have poor spelling.')){
    message.channel.send('"Poor spelling/grammar can be a sign of dyslexia. The can be a sign of being an iconoclast. They can be a sign of humor (see, Mark Twain). They can be a sign of a lot of things. What is more difficult to get away from, though, is that they are a symbol of poor education and poor intelligence. While this may not be the case (dyslexics have to fight this perception their entire lives, for instance), the Venn diagrams overlap enough. Generally, the people who err with them also happen to be poorly educated or suffer from lower intelligence. While this may be unfair to lump in the educated and intelligent (but dyslexic) with these types of people, the lack of precision and attention to detail in language often reflects a larger population of people who either didn’t go far in school, or didn’t take it seriously." - J Metz, Ph.D in Communication/Mass Communication')
  }
})

client.on('message',function(message){
  if (message.content.startsWith('You have poor grammar.')){
    message.channel.send('"Poor spelling/grammar can be a sign of dyslexia. The can be a sign of being an iconoclast. They can be a sign of humor (see, Mark Twain). They can be a sign of a lot of things. What is more difficult to get away from, though, is that they are a symbol of poor education and poor intelligence. While this may not be the case (dyslexics have to fight this perception their entire lives, for instance), the Venn diagrams overlap enough. Generally, the people who err with them also happen to be poorly educated or suffer from lower intelligence. While this may be unfair to lump in the educated and intelligent (but dyslexic) with these types of people, the lack of precision and attention to detail in language often reflects a larger population of people who either didn’t go far in school, or didn’t take it seriously." - J Metz, Ph.D in Communication/Mass Communication')
  }
})