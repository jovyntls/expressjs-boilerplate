---
title: 'Getting Started'
date: 2021-12-09T00:44:31+08:00
---

## Installing Node and NVM

Our backend will be written in Express.js, which is a Node.js framework.

### Install nvm (Node Version Manager)

1. Use _either_ cURL or Wget to install nvm:
   - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
   - `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
     {{< alert style="warning" >}} Homebrew installation is not supported. If you are on MacOS, do not use Homebrew. {{< /alert >}}
2. Verify that nvm is correctly installed by running `command -v nvm`, which should output `nvm` if the installation is successful.
   - If the installation is not successful, you can find [troubleshooting tips here](https://github.com/nvm-sh/nvm#installing-and-updating).

### Install Node

1. Install Node using nvm: `nvm install v16`
2. Verify that Node v16 has been correctly installed: `node -v`.

## Installing PostgreSQL

Our database will be using PostgreSQL, a relational database management system.

### Installing psql

**For MacOS**

1. `brew install postgresql`
2. `brew services start postgresql`
3. Enter `psql` into your terminal. If psql is correctly installed, you should see a psql prompt. Enter `\q` to quit.

**For Ubuntu**

1. PostgreSQL is available in all Ubuntu versions by default.
   - If you still need to download PostgreSQL: [Installation instructions](https://www.postgresql.org/download/linux/ubuntu/) (under 'PostgreSQL Apt Repository')
2. `sudo service postgresql start`

### Setting up psql

If it is your first time using psql, you may have to create a new user and database. Skip any of the steps if your terminal tells you that the user/database is already created.

For all steps, replace `jovyntan` with your own user:

1. Enter the psql command prompt: `sudo -u postgres psql`, or if it doesn't work: `psql -U postgres`
2. Create a user for yourself: `CREATE ROLE jovyntan WITH CREATEDB LOGIN;`
3. Make yourself a superuser: `ALTER USER jovyntan WITH SUPERUSER;`
4. `CREATE DATABASE jovyntan WITH OWNER jovyntan;`

## Linting

This project is linted using Prettier.

1. Install [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) as a VS Code extension.
2. In VSCode, enter Cmd+Shift+P (or Windows equivalent) and select 'Format document'. Select Prettier as the default formatter.
3. Turn on **Format on Save** in VSCode.
   - Via VSCode settings: **File** > **Preferences** > **Settings** > Search for **Format On Save** and check the box.
   - Via settings.json: Open `settings.json` and add the following line: `"editor.formatOnSave": true`

From here, files should automatically be formatted on save.

If that doesn't work, you can also use `npm run pretty`. If an error occurs as Prettier is not installed globally: `npm install -g prettier`.

## Development

You're almost there! Final steps before you start coding:

### Setting Up

1. Run `npm install`
1. Make a copy of `.env.template` and name it `.env.local`. Fill in the empty fields.
   {{< alert style="warning" >}} `.env.local` is ignored by `.gitignore` because it contains your passwords - do _not_ commit `.env.local`! {{< /alert >}}
1. Create a database for this project:
   1. Enter the psql command prompt: `psql`
   1. Create the database: `CREATE DATABASE fintech_dao_development;`
   1. Quit the psql command prompt: `\q`
1. Create and seed tables: `npm run seeddb`
   - This script will drop all tables and re-create the tables with sample data. It may take a while to run.
1. Start the development server: `npm run startdev`
   - You should be able to access the API at [http://localhost:3000](http://localhost:3000), or a different port if `3000` has been taken. :tada::tada:

### Available Scripts

Each of these scripts should be run using `npm run`, e.g. `npm run start`.

- `start`: Starts the development server
- `startdev`: Starts the development server, with auto-refresh
- `pretty`: Lints with Prettier
- `seeddb`: Drops tables, creates tables, and seeds tables with data

## Helpful Tools

- [Postman](https://www.postman.com/) is highly useful for testing your API requests.
  - Both the desktop app and the web version work fine. If you use the web version, you will need to download the Postman Agent to access `localhost`.
- Any JSON formatting Chrome extension, e.g. [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [pgAdmin](https://www.pgadmin.org/) to manage your databases with a GUI if you prefer GUI over command line.
- [SourceTree](https://www.sourcetreeapp.com/) for git if you prefer GUI over command line.
  - More help with Git: [Git conventions](https://se-education.org/guides/conventions/git.html) and [branching in Git](https://nus-cs2103-ay2122s1.github.io/website/se-book-adapted/chapters/gitAndGithub.html#branch-doing-multiple-parallel-changes)
