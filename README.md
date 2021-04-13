# gierweb
![logoGierweb](https://user-images.githubusercontent.com/47739188/114620898-5936be80-9cac-11eb-8908-520f6d9d3051.png)


Vue.js + TypeScript App that is presenting a database of games. We have added some users with their catalogue of games to browse through.

All data has been generated with [Mockaroo](https://mockaroo.com/)

## Available bookmarks
### Games
Provides list of games with searchbar and buttons to change the filtering with game genres.
From games, individual game pages can be accessed.
### Charts
TBD
### Users
Provides list of users that can be filtered with search. From user card, user's library can be accessed. From the library, individual game pages can be accessed. From individual game pages user can go back to the Games view.

## Provider
The provider that made data accessible is set up on [Heroku](https://gier-web.herokuapp.com/users). Project related to the provider is also on [Github](https://github.com/BarHanSolo/Gierweb-provider)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

