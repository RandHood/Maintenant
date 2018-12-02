# Maintenant <img src="https://github.com/RandHood/Maintenant/blob/develop/public/logo.ico" width="23" alt="Logo">

Maintenant is a web app that gives you the forecast along with news.

### Tabs

* Weather - 5 days forecast, today's windspeed and humidity
* News - Contains global news with their source.

---

## How to run

#### Setup Docker

You must have Docker installed in order to run the app. Download for:
* [Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows)
* [Mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

Skip this part if you already have Docker installed.

#

#### Setup Config

**Step 1:** Create a new file in `src/` with the name *`local.config.json`*.

**Step 2:** Copy the content of the file `src/config-example.json`.

**Step 3:** Paste the copied content into your newly created file `src/local.config.json`.

#

#### Running on browser

Now that you have everything setup and ready, open your terminal in the project directory and run the following command: **`docker-compose up`**

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
