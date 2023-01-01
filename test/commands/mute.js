module.exports = [{
    name: "$alwaysExecute",
    code: `
$deletecommand
$onlyIf[$hasRoles[$guildID;$authorID;$getUserVar[role]]`
}]