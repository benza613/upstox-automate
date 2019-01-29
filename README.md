# upstox-automate
Automate your Upstox auth lifecycle using a headless browser &amp; basic auth mechanism. <br/>
Project uses puppeteer to run a headless chromium browser & express to serve endpoints. <br/>
Recommended: Add your own more secure request auth mechanism.  <br/>

### Endpoints 
GET http://deployed.site/ -- to check if app is alive <br/>
POST http://deployed.site/getToken -- pass adminPass in body to retrieve back validated upstox token <br/>
     adminPass=PUT_RANDOMADMINPASS_HERE 

## AMAZON APP SERVICE READY 
Project is configured to run flawlessly with any amazon app service plan. <br/>
Just check the necessary entry points in web.config & process.json as required. Otherwise these two files are not essential to the working of the project in any way. 
