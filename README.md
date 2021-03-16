# Seinfeld's App

This project was made with Create React App, Typescript and Chakra UI.
## Routes

This porject has two routes:

### `/`

This is the **Home** route where you can find a summary of the show and a list of episodes

### `/season/:season/episode/:episode`

This is the **Details** route, you can access a specific episode directly in the url path.
If the patch is not valid, it will render a 404 page.

## Things to improve

* Responsiveness.
* Types are a mess, should improve once I undertand typescript a little more.
* Add a spinner when API response takes too long.
* Add more error handling.