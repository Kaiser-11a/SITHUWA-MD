const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '249112238037'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFnbWFaNHpDcGJTWEphR3gydXhReTU3WjdzQmNOUXBMaDBqRzRMOGJYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0RPZTh3MnlTZEJ4U2tycTJrOGowQ1dFVmNzbm1kc3AwYlpiQmpVdTJVRT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSjIrM1VERHJlVDFzTFl2bnpCME1pK2xxMVNBTytIWHJKemxXc1U0ZW00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNkdmU3QxYnFWc2JycGVMV1oyLzhYSlVhRjJEL3pWMmNnQzJSUHRXdG0wPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQL0U1THgyZXUyT0VJN2U1UDNjMVRyVktRaXdDVHE0RHFWMXkzNHl2RlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4ZnBJRGR1VXFld0t3TnB4cTlaSC9lR2pLRzVxSmFMTEdyb0pKMnVoVWM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSGQyZ2x1VFYxWnJJaTVDYnpiaGd1S3JLYWd3YU1iWE9KZFdadlhIUU5YRnk1azRnNThsWktZOEpaUE5GUUw1T3dieXN6b0xUTERoUldoSkYvcXRBdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExNCwiYWR2U2VjcmV0S2V5IjoiUXpjcFNEUEY1eWhtSWtKcHhTa1dNR3ZscWw4UkJiRENWYUFQOXk4Z1J2QT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDkxMTIyMzgwMzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzQ4QzRENThGREE5Q0Q2MzIzRDNBOTg0RjE4RkI0M0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNjc5OTE2M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicFpzRmpqX21Tbm1zeEhhVkFZOXJJZyIsInBob25lSWQiOiI0ZmE3YzNiZC0wZTNkLTQxNDktYjVkNC04ODZmNDY5ZThhMDYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDcxYUhRTlpTWE1RMUxiRzB6VTN3U1VOQXhvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZXV5YmpwTXlXVzQ0U0YxMFcvYS85SmJQbEU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNON2ExTElDRUxQZzdxMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0OHhWbWR2RzlWWk1WOUpYUktHMHBKaTRDL0xRMWNqOVpGdk1oM0dtcjN3PSIsImFjY291bnRTaWduYXR1cmUiOiJ5UmRmL2VvREd5TVhNQUxPMWxzckZtb2JNa3UrT1l1dDBoZHVzcXZRL1hHZHljRndVRjZ6MjIxVXhiZXY0ZWVleDUwNFUwS2p3SDZPU3dJem9PM0VCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNzlpUm5OU3JSbWNxMU9rQUVUay81YzdXYnl0WWkyTTFOUmZQN3drZ3FCVk1aQ3VmSUgraXc1WkVtYUpEa0ZpWlpnU1gzTGJvQW43bmUwZm5yQit0QUE9PSJ9LCJtZSI6eyJpZCI6IjI0OTExMjIzODAzNzoyNkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJRdWVlbi1BbnlhX1YyIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0OTExMjIzODAzNzoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlUE1WWm5ieHZWV1RGZlNWMFNodEtTWXVBdnkwTlhJL1dSYnpJZHhwcTk4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA2Nzk5MTU4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhJSiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
