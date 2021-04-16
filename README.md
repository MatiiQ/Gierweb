# gierweb

![logoGierweb](https://user-images.githubusercontent.com/47739188/114620898-5936be80-9cac-11eb-8908-520f6d9d3051.png)

Vue.js + TypeScript App that is presenting a database of games. We have added some users with their catalogue of games to browse through.

All data has been generated with [Mockaroo](https://mockaroo.com/)

## Available bookmarks

### Games

Provides list of games with searchbar and buttons to change the filtering with game genres.
From games, individual game pages can be accessed.

### Charts

To present charts using Chart.js we have used a wrapper [vue3-chart-v2](https://vue3-chart-v2.netlify.app/).
There are 2 charts: first is of type bar and the second doughnut.
One is displaying data about number of players and the second number of games of each genre. Data comes from Mockaroo.

### Users

Provides list of users that can be filtered with search. From user card, user's library can be accessed. From the library, individual game pages can be accessed. From individual game pages user can go back to the Games view.

## Provider

The provider that made data accessible is set up on [Heroku](https://gier-web.herokuapp.com/users). Project related to the provider is also on [Github](https://github.com/BarHanSolo/Gierweb-provider)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm run test:unit
```

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
