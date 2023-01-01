module.exports = [{
  name: "staff",
  code: `
$deletecommand
$title[Рискнуть стать частю Staff\`\а]
$description[**Что от вас требуется**
・Уделять серверу в среднем по три часа в день
・13 полных лет
・Быть максимально стрессоустойчивым
・Бдительность и Адекватность
・Длительность пребывания на сервере не менее недели
**Что вы получите взамен?**
・Дополнительные права.
・Карьерный рост
・Еженедельная зарплата валютой в виде серверной валюты]
 $addSelectMenu[1;staff;Выбери категорию;1;1;no;Модератор:Подать заявку на модератора:staff0:no:;Ютубер:Подать заявку на ютубера:staff1:no:;Стример:Подать заявку на Стримера:staff2:no:]
 $onlyForIDs[988098260285661194;]
`},
module.exports = {
  name: "staff",
  type: "interaction",
  prototype: "selectMenu",
  code:`$interactionModal[Заявка на модератора;staffModal;{actionRow:{textInput:Как вас зовут?:1:nameInput:yes:Александр:0:10}}{actionRow:{textInput:Сколько вам лет:1:ageInput:yes:13+:0:2}}{actionRow:{textInput:Сколько вы находитесь на сервере:1:timeInput:yes:1 месяц:0:10}}{actionRow:{textInput:Расскажите о себе:2:historyInput:yes::0:1000}}
  ]
  
  $onlyIf[$interactionData[values[0]]==staff0;]`
},
module.exports = {
  name: "staff",
  type: "interaction",
  prototype: "selectMenu",
  code:`$interactionModal[Заявка на ютубера;staff1Modal;{actionRow:actionRow:{textInput:Как вас зовут?:1:nameInput:yes:Александр:0:10}}{actionRow:{textInput:Сколько вам лет:1:ageInput:yes:13+:0:2}}{actionRow:{textInput:Сколько вы находитесь на сервере:1:timeInput:yes:1 месяц:0:10}}{actionRow:{textInput:Расскажите о себе:2:historyInput:yes::0:1000}}
  ]
  
  $onlyIf[$interactionData[values[0]]==staff1;]`
},
module.exports = {
  name: "staff",
  type: "interaction",
  prototype: "selectMenu",
  code:`$interactionModal[Заявка на стримера;staff2Modal;{actionRow:actionRow:{textInput:Как вас зовут?:1:nameInput:yes:Александр:0:10}}{actionRow:{textInput:Сколько вам лет:1:ageInput:yes:13+:0:2}}{actionRow:{textInput:Сколько вы находитесь на сервере:1:timeInput:yes:1 месяц:0:10}}{actionRow:{textInput:Расскажите о себе:2:historyInput:yes::0:1000}}
  ]
  
  $onlyIf[$interactionData[values[0]]==staff2;]`
},
module.exports = {
  name: "staffModal",
  type: "interaction",
  prototype: "modal",
  code:`$channelSendMessage[$getUserVar[channel];
  {newEmbed:{title:$username[$authorID]#$discriminator - модератор}{description:\`\`\`Имя - $textInputValue[nameInput]\`\`\`
  \`\`\`Возраст - $textInputValue[ageInput]\`\`\`
  \`\`\`Сколько вы находитесь на сервере - $textInputValue[timeInput]\`\`\`
  \`\`\`Обо мне - $textInputValue[historyInput]\`\`\`}{timestamp}{thumbnail: $authorAvatar}]
  $interactionFollowUp[;{newEmbed:{title:Заявка на модератора}{description:$username, вы успешно подали заявку на модератора!}{timestamp}{thumbnail: $authorAvatar}]
  $interactionDefer[yes]`
},
module.exports = {
  name: "staff1Modal",
  type: "interaction",
  prototype: "modal",
  code:`$channelSendMessage[$getUserVar[channel];
  {newEmbed:{title:$username[$authorID]#$discriminator - ютубер}{description:\`\`\`Имя - $textInputValue[nameInput]\`\`\`
  \`\`\`Возраст - $textInputValue[ageInput]\`\`\`
  \`\`\`Сколько вы находитесь на сервере - $textInputValue[timeInput]\`\`\`
  \`\`\`Обо мне - $textInputValue[historyInput]\`\`\`}{timestamp}{thumbnail: $authorAvatar}]
  $interactionFollowUp[;{newEmbed:{title:Заявка на модератора}{description:$username, вы успешно подали заявку на ютубера!}{timestamp}{thumbnail: $authorAvatar}]
  $interactionDefer[yes]`
},
module.exports = {
  name: "staff2Modal",
  type: "interaction",
  prototype: "modal",
  code:`$channelSendMessage[$getUserVar[channel];
  {newEmbed:{title:$username[$authorID]#$discriminator - стример}{description:\`\`\`Имя - $textInputValue[nameInput]\`\`\`
  \`\`\`Возраст - $textInputValue[ageInput]\`\`\`
  \`\`\`Сколько вы находитесь на сервере - $textInputValue[timeInput]\`\`\`
  \`\`\`Обо мне - $textInputValue[historyInput]\`\`\`}{timestamp}{thumbnail: $authorAvatar}]
  $interactionFollowUp[;{newEmbed:{title:Заявка на модератора}{description:$username, вы успешно подали заявку на стримера!}{timestamp}{thumbnail: $authorAvatar}]
  $interactionDefer[yes]`
}]