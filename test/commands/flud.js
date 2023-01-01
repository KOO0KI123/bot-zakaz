module.exports = [{
    name: "$alwaysExecute",
    $if: "v4",
    code: 
    `$if[$message[1]==$message[2]]
    $if[$message[2]==$message[3]]
    $if[$message[3]==$message[4]]
    $if[$message[4]==$message[5]]
    $takeRole[$guildID;$authorID;$getUserVar[role]]
    $wait[1h]
    $giveRole[$guildID;$authorID;$getUserVar[role]]
    $deletecommand
    $endif
    $endif
    $endif
    $endif
    `
}]