/*
   * Created By AdrianDev
   * My Contact https://wa.me/6289513081052
   * Version Rxzy-MD 1.3 ( Free Edition )
   
   * sory kalau banyak error karena lu apikeynya gak ada atau limit abis
   * kalau mau beli Premium Edition Chat Gw Aja Harga Bisi-Bisi Fitur Banyak
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '-' // https://api.lolhuman.xyz
global.xzn = '-' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '51902679067' // Owner Utama
global.owner = ['51902679067'] // Owner Lainnya
global.namaowner = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // Nama Owner
global.premium = ["51902679067"] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // NickBot
global.typemenu = 'v3' // 'v1' => 'v6'
global.typereply = 'v2'
global.autoread = false // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.onlygrup = false // onlygroup
global.onlypc = false // onlypece
global.packname = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // Watermark Sticker
global.author = '𝚂𝚈𝚂𝚂𝙾𝙻𝚄𝚃𝙸𝙾𝙽𝚂' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    limit: '*Limit Anda Habis*',
    done: 'Done ✅',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Private Chat*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://youtube.com/@syssolutionsperu'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})