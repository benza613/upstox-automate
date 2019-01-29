const express = require('express')
const app = express()
const puppeteer = require('puppeteer');

app.set('port', process.env.PORT || 4700);
const port = app.get('port');

//****USE TO AUTHENTICATE UR REQUEST**** CAN BE RETRIEVED FROM SQL LATER
const _RANDOMADMINPASS = '#Hv7N36XW8';

// QUERY STRING PARAMETERS 
// auth token can be received here itself and returned in express call 
let apiKey = 'casdadadsas64asdsadadadadsaddasdadsadsadsdsNb8SC9OqkKh';
let redirect_uri = 'http://trasdasdadadadadsites.net/NodeJS/UpstoxCode.aspx';

let _API_URL = 'https://api.upstox.com/index/dialog/authorize?apiKey=' + apiKey + '&redirect_uri=' + redirect_uri + '&response_type=code'


// PARAMETERS FOR PAGE CLICK 
var _USERNAME = 'FILL_USERNAME'
var _PASSWORD = 'FILL_PASSWORD'
var _PASSCODE = 'FILL_CODE'

app.get('/', (req, res) => {
    res.send({
        resMsg: 'UPSTOX AUTOMATE - APP IS ALIVE '
    })
});

app.post('/getToken', (req, res) => {
    console.log('Entered');

    if (req.body.adminPass == _RANDOMADMINPASS) {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const keyboard = page.keyboard
            await page.goto(_API_URL);

            await page.focus('#name');
            await keyboard.type(_USERNAME);
            await page.focus('[name="password"]');
            await keyboard.type(_PASSWORD);
            await page.focus('[name="password2fa"]');
            await keyboard.type(_PASSCODE);

            await page.click("body > form > fieldset > div.bottom-box > div > button");
            console.log('submit creds');

            await page.waitForSelector('#allow');

            await page.click('#allow');
            console.log('Allow permission clicked');

            await page.waitForNavigation();
            await browser.close();

            res.send({
                necessaryToken: '// return page.querystring.requiredToken // syntax is not perfect ',
                errId: 200,
                resMsg: 'CODE SUCCESS // add as many parameters as you require'
            })

        })();

    } else {
        res.send({
            errId: 404,
            resMsg: 'INVALID AUTH PARAMS'
        })
    }
});


app.listen(port, () => console.log(`Hi Pritee, Example app listening on port ${port}!`))