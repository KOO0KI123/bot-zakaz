const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "MTA1OTAyNjc5MjIzODgyMTQyOQ.G4x9UK.gQP-CPgzW62ozbm3yEpL6wp0gsGey-TspvXHIM",
  prefix: ".",
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.variables({
    word: "",
    spam: 0,
    lvl: 0,
    xp: 0,
    maxxp: 500,
    role: "1059053176499740753",
    channel: "1059061827474030663",
    role1: "1045954897591406643",
    role2: "1045955063526461460",
    role3: "1045955349611544597",
    role4: "1045955953801052231",
    role5: "1045955944288374864"
})

//Events
bot.onMessage()
bot.onInteractionCreate()

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

//Command Example (ping)
bot.command({
  name: "ping",
  code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
  channel: "",
  code: `$log[Ready on $userTag[$clientID]]`
})

bot.status({
text: "MODERATOR", 
type: "STREAMING", 
url: "https://twitch.tv/koo0ki"
})