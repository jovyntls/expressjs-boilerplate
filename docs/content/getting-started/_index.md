---
title: "Getting Started"
date: 2021-12-09T00:44:31+08:00
---

## Installing Node and NVM

Our backend will be written in Express.js, which is a Node.js framework.

1. Install nvm (Node Version Manager)
1. [Installation instructions](https://github.com/nvm-sh/nvm##installing-and-updating)
   - If you are on MacOS, do not use Homebrew. Homebrew installation is not supported.
   - We will use nvm to manage Node installations.
   - Verify that nvm is correctly installed by running `nvm ls-remote`, which lists all versions of Node.
1. Install Node using nvm: `nvm install v16`
1. Use `node -v` to verify that Node v16 has been correctly installed.

## Installing PostgreSQL

Our database will be using PostgreSQL, a relational database management system.

### Installing psql

**For MacOS**

1. `brew install postgresql`
2. `brew services start postgresql`
3. Enter `psql` into your terminal. If psql is correctly installed, you should see a psql prompt. Enter `\q` to quit.

**For Ubuntu**

1. https://www.postgresql.org/download/linux/ubuntu/
2. `sudo service postgresql start`

### Setting up psql

If it is your first time using postgresql, you may have to create a new user and database. Skip any of the steps if your terminal tells you that the user/database is already created.

For all steps, replace `jovyntan` with your own user:

1. Enter the psql command prompt: `sudo -u postgres psql`, or if it doesn't work: `psql -U postgres`
2. Create a user for yourself: `CREATE ROLE jovyntan WITH CREATEDB LOGIN;`
3. Make yourself a superuser: `ALTER USER jovyntan WITH SUPERUSER;`
4. `CREATE DATABASE jovyntan WITH OWNER jovyntan;`

## Linting

If Prettier still doesn't work:

1. Ensure Prettier is installed as a VS Code extension.
2. In VSCode, enter Cmd+Shift+P (or windows equivalent) and select Format document. Select Prettier as the formatter.
3. If (2) doesn't work, you can `npm run pretty`.
4. If an error occurs as prettier is not installed globally, `npm install -g prettier`.

## Starting Development

1. Make a copy of `.env.template` and name it `.env.local`. Fill in the fields.
   - DO NOT COMMIT `.env.local` because you're going to be putting your passwords inside! It should already be ignored by .gitignore so just don't commit it on purpose :)
2. Create a database for this project:
   1. Enter the psql command prompt: `psql`
   1. Create the database: `CREATE DATABASE fintech_dao_development;`
   1. Quit the psql command prompt: `\q`
3. Run the script to create tables and seed the tables with data: `npm run seeddb`
   - This script will drop all tables and re-create the tables with sample data. It may take a while to run.

## Development

- `npm install`
- `npm run start`, or `npm run startdev` to auto-refresh

## Helpful Tools

- [Postman](https://www.postman.com/) is highly useful for testing your API requests. Both the desktop app and the web version work fine.
  - If you use the web version, you will need to download the Postman Agent to access `localhost`. The web version will link you to the Postman Agent (along with necessary instructions) if you try to make a request to `localhost`.
- Any JSON formatting chrome extension, e.g. [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)
- [pgAdmin](https://www.pgadmin.org/) to manage your databases with a GUI. Not necessary, especially if you prefer the command line

