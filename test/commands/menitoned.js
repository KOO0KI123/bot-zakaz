module.exports = [{
    name: "$alwaysExecute",
    code: `
$takeRole[$guildID;$authorID;$getUserVar[role]]
$wait[1h]
$giveRole[$guildID;$authorID;$getUserVar[role]]
$deletecommand
$onlyIf[$mentionedUsersCount>=5;]`
}]