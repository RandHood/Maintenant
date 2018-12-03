# Maintenant <img src="https://github.com/RandHood/Maintenant/blob/master/public/logo.ico" width="23" alt="Logo">

Maintenant is a web app that gives you the forecast along with news.

### Tabs

* Weather - 5 days forecast, today's windspeed and humidity
* News - Contains today's global headlines with access to the full articles.

*The weather & forecast were provided by [OpenWeatherMap](https://openweathermap.org), news from Google News API by [News API](https://newsapi.org/)*

---

## How to run

#### Setup Config

**Step 1:** Create a new file in `src/` with the name *`local.config.json`*

**Step 2:** Copy the content of the file `src/config.json-example`

**Step 3:** Paste the copied content into your newly created file `src/local.config.json`

#

### Method 1: Using Docker

#### Setup Docker

You must have Docker installed in order to run the app. Download for:
* [Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)
* [Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

Skip this part if you already have Docker installed.

#

#### Option 1: `docker run`

##### Building the image

Build the image by running in your terminal the following:

```
$ docker build -t maintenant_app .
```

#

##### Running on browser

After building the image start the app and run it on localhost:30000 with the following command:
```cmd
$ docker run -p 3000:3000 -d maintenant_app
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#

#### Option 2: `docker-compose`

##### Building the app

To build the app, open your terminal in the project directory and run the following command:

```
$ docker-compose build
```

#

##### Running on browser

Now that you have everything setup and ready, start the app and run it with the following command:
```
$ docker-compose up
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#

### Method 2: Running in development mode

#### Setup NPM

You must have NPM installed in order to run the app. Download for:
* [Windows](https://nodejs.org/dist/v10.14.1/node-v10.14.1-x86.msi)
* [Mac](https://nodejs.org/dist/v10.14.1/node-v10.14.1.pkg)

Skip this part if you already have NPM installed.

#

#### Install modules

To install the required node packages run the following command in the terminal:
**`npm install`**

#

#### Running on browser

Now that you have everything setup and ready, open your terminal in the project directory and run the following command: **`npm start`**

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
