module.exports = [{
    name: "$alwaysExecute",
    code: `
  $setUserVar[xp;$sum[$getUserVar[xp];$random[10;30]];$authorID]
  $onlyIf[$getUserVar[xp]<$getUserVar[maxxp];]
  `}]