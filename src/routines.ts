import CronJob from "cron"

import { informations } from './routes'

function helloMyFriend() {
  informations.forEach((information) => {
    console.log(`olá ${information.user} temos uma mensagem pra você:`)
    console.log(`${information.content}`)
  })
}

const processName = process.env.name || 'primary'

export default () => {
  if(processName.search(/primary/) !== -1) {
    const helloItsMe = new CronJob.CronJob('* * * * *', helloMyFriend)
  
    helloItsMe.start()
  }
}