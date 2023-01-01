module.exports = [{
    name: "$alwaysExecute",
    $if: "v4",
    code: 
    `$setUserVar[word;$message]
    $if[$getUserVar[word]==$message]
    $setUserVar[spam;$sum[$getUserVar[spam];1]]
    $endif
    $if[$getUserVar[word]!=$message]
    $setUserVar[spam;0]
    $endif
    $if[$getUserVar[spam]==5]
    $takeRole[$guildID;$authorID;$getUserVar[role]]
    $wait[1h]
    $giveRole[$guildID;$authorID;$getUserVar[role]]
    $clear[15;$authorID;no;$channelID]
    $setUserVar[spam;0]
    $endif
    `
}]