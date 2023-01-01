module.exports = [{
    name: "$alwaysExecute",
    $if: "v4",
    code: `
  $if[lvl==5]
  $giveRole[$guildID;$authorID;role1]
  $endif

  $if[lvl==20]
  $giveRole[$guildID;$authorID;role2]
  $takeRole[$guildID;$authorID;role1]
  $endif

  $if[lvl==50]
  $giveRole[$guildID;$authorID;role3]
  $takeRole[$guildID;$authorID;role2]
  $endif

  $if[lvl==100]
  $giveRole[$guildID;$authorID;role4]
  $takeRole[$guildID;$authorID;role3]
  $endif

  $if[lvl==150]
  $giveRole[$guildID;$authorID;role5]
  $takeRole[$guildID;$authorID;role5]
  $endif

  $description[$username, вы повысили свой уровень!]
  $setUserVar[xp;0;$authorID]
  $setUserVar[maxxp;$sum[$getUserVar[maxxp];500];$authorID]
  $setUserVar[lvl;$sum[$getUserVar[lvl];1];$authorID]
  $title[Повышение уровня!]
  $onlyIf[$getUserVar[xp]>=$getUserVar[maxxp];]
  `}]