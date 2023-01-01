module.exports = [{
    name: "rank",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionReply[;{newEmbed:{title:Ранг $username}{description:}{field:> **Уровень**:\`\`\`$getUserVar[lvl]\`\`\`:yes}{field:> **Опыт**:\`\`\`$getUserVar[xp]\`\`\`:yes}{field:> **До следующего уровня**:\`\`\`$sub[$getUserVar[maxxp];$getUserVar[xp]]\`\`\`:yes}{timestamp}{thumbnail: $authorAvatar};;true]
  `}]