module.exports = [{
    name: "help",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed:{title:Информация о боте}{description:**Пинг:** \`$ping\`
}{timestamp}{thumbnail: $userAvatar[1059026792238821429]};;true]
  `}]