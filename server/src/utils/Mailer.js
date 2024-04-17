import { accountService } from "../services/AccountService"
import { weatherService } from "../services/WeatherService"
import { logger } from "./Logger"
const Mailgen = require('mailgen')
const nodemailer = require('nodemailer')
const cron = require('node-cron');

cron.schedule('*/30 * * * *', async () => {
    try {
        // const testAccount = await nodemailer.createTestAccount()
        // const transporter = nodemailer.createTransport({
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     secure: false, // Use `true` for port 465, `false` for all other ports
        //     auth: {
        //         user: testAccount.user,
        //         pass: testAccount.pass,
        //     },
        // });
        // const message = {
        //     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
        //     to: "bar@example.com, baz@example.com",
        //     subject: "Hello ✔",
        //     text: "Hello world?",
        //     html: "<b>Hello world?</b>",
        // };
        // transporter.sendMail(message).then((info) => {
        //     return res.status(201)
        //         .json({
        //             msg: " received an email",
        //             info: info.messageId,
        //             preview: nodemailer.getTestMessageUrl(info)
        //         })
        // })
        let config = {
            pool: true,
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false,
            }
        }
        let transporter = nodemailer.createTransport(config)
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Weather",
                link: 'https://mailgen.js/'
            }
        })

        const accounts = await accountService.getAllAccounts()
        let emails = []
        accounts.forEach(account => {
            account.favoriteLocations.forEach(async location => {
                const weather = await weatherService.getCurrentWeatherInfo()
                if (weather?.current?.temp_f >= 90) {
                    let message = {
                        body: {
                            name: 'Weather Update',
                            intro: `Its getting Hot! The temperature in ${location} has reached 90 deg.`,
                            outro: 'Make sure to drink plenty of water, especially if you are in the area.'
                        }
                    }
                    let mail = MailGenerator.generate(message)
                    let email = {
                        from: process.env.EMAIL,
                        to: account.email,
                        subject: "Temperature",
                        html: mail
                    }
                    emails.push(email)
                }
            })
        });
        const promises = emails.map(m => transporter.sendMail(m))
        const results = await Promise.allSettled(promises)
        return results


        // transporter.sendMail(emails)
    } catch (error) {
        logger.error('[MAILER_ERROR]', error);
    }
})