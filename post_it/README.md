# TWP_project

Welcome to this post-it project! The following instructions should help you work with this project.

## Description

This website is a post-it app. It enables the user to see which tasks he has to do, as well as to add, delete, and modify them.

The post it cards are linked to a private API, hence, you may not be able to really use the website (you won't be able to read, or interact with the cards).

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Routes
1. "/": The default path when the app is launched, displays the home view with all the cards. Possibility to access and delete each card on this view.This view also presents the user with the option to add a card. 
2. "/Card/:id": The view displaying the card that was clicked on in the home view, possibility to edit the components of the card
3. "/AddCard": The view that is clicked on when the user clicks on the "Add a card" button. The view presents the user with a form to fill which corresponds to the fields of the card, and which redirects the user to the home view.
4. "/ModifyCard/:id": The user is redirected to this view when clicking on the "Modify Card" button from the "/Card/:id" view. This view presents the user with another form which enables to modify a certain card.


### Authors
-> Nathan Delmarche
-> Côme Mençon

