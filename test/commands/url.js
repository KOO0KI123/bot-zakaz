module.exports = [{
    name: "$alwaysExecute",
    code:`
    $takeRole[$guildID;$authorID;$getUserVar[role]]
    $wait[1h]
    $giveRole[$guildID;$authorID;$getUserVar[role]]
    $deletecommand
    $title[Нарушение]
    $description[<@$authorID> кидать ссылки на приглашения у нас запрещено]
    $onlyIf[$checkContains[$message;discord.gg/;https://discord.gg/;https://discord.com/invite]==true;]`
}]