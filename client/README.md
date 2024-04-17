This Weather application is designed so that anyone can search and see a variety of weather data from any location. 

Also in this application:
    --Any user should be able to create an account and log in to save and delete favorite locations. 
    --The user will be sent email notifications for each of their favorite locations based on the temperature exceeding 90 degrees fahrenheit.
    --(This part of the application currently does not work and is in need of further testing.)

    --This application implements vue.js for the front-end framework and node express for the backend.
    --The login is run by auth0 and the account information is saved in a nonSQL database(mongoDb).
    --The Weather data is pulled from a weather api with Axios.


To fully run this application you will have to create new env.js and .env folders with your own mongodb database and auth0 application info(you can create a free account with both of these). After creating your env files you should be able to open the workspace from the workspace folder and serve the front and back end. If everything spins up properly you should be able to access this application from your localhost port that you set(default 8080). You should be able to spin up the basic functionality of this application without creating env files with your account information, you will likely run into some errors though and might have to comment out some of the mailer setup code in the Mailer.js file or any other files that are affected by the env files missing.

To extend the functionality of this application:
    --The Mailer setup needs to be debugged and got working. 
    --The interval for reaching out to the weather api needs to be set so that the front end is updated properly without having to manually resend the  request to the api on the front-end.
    --This application could be hosted