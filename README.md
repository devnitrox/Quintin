# Quintin
The Discord bot that runs operations in the realm.

## What can this bot do?
This bot has a basic economy system and tax system, by basic I mean very basic. All of the database stuff for this bot is stored in different `JSON` files. This would all be better being stored on a **MongoDB** database in the future.

## Will you update this code frequently?
Probably not, but once the bot is completely done it will be publically available. I'll most likely update this page when I feel something is worth updating on.

## Why is the code so messy and inefficient?
The code was made over the span of a week, mostly made for jokes. I didn't take this bot seriously so the code is mostly rushed with limited fallbacks for erros. To set up from this source, it requires a lot of effort going through the files and adjusting them for how you want it. For example, you'll have to go through and edit some channel ID's, user ID's and file paths. You'll probably also want to change some names that are mentioned in the code.

## How do I start Quintin?
As much as I advise you to not use this code due to the sheer amount of terrible code, if you still want to try it then download the code, run `npm init` in the root directory of the project and use `npm run server` to run the code. You'll also need to fix the missing file errors, one is mentioned above. You'll need to grab some images for the `codify`, `olify` and `reecify` functions. There will also be some channel IDs that you will need to change for the random pings and DMs.

## I get errors about missing `.png` files when starting Quintin?
You'll need to add `new_image.png`, `new_image_2.png` and `new_image_3.png` to the root directory of the project to fix this issue.

## I get errors about not being able to see `money.json`?
I had to hard code the directory to `money.json` to fix an issue I was having with `fs`, change this path to your own path to `money.json`.

### If you are planning to use this code as the start of a bot, I highly reccommend you do not. There will be a lot of changes you will need to make to get it working, and the code is highly innefficient.
