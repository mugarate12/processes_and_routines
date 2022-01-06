import CronJob from "cron"

import { informations } from './routes'

function helloMyFriend() {
  informations.forEach((information) => {
    console.log(`olá ${information.user} temos uma mensagem pra você:`)
    console.log(`${information.content}`)
  })
}

export default () => {
  const helloItsMe = new CronJob.CronJob('* * * * *', helloMyFriend)

  helloItsMe.start()
}