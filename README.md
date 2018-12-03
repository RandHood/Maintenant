# Maintenant <img src="https://github.com/RandHood/Maintenant/blob/develop/public/logo.ico" width="23" alt="Logo">

Maintenant is a web app that gives you the forecast along with news.

### Tabs

* Weather - 5 days forecast, today's windspeed and humidity
* News - Contains today's global headlines with access to the full articles.

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

#### Building the Docker image

To build the Docker image, open your terminal in the project directory and run the following command:

**`docker-compose build`**

#

#### Running on browser

Now that you have everything setup and ready, run the following command: **`docker-compose up`**

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
