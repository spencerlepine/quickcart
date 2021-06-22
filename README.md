# QuickCart &middot; [DEMO](https://grocery-client-sl.herokuapp.com/) ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
_Make a shopping list with personal grocery data to help budget._

<p align="center">
  <a href="#setup">Setup</a>  •
	<a href="#technologies">Technologies</a> •
  <a href="#features">Features</a> •
  <a href="#contributing">Contributing</a>
</p>

<div style="text-align:center"><img src="./src/images/demo_small.png" alt="QuickCart Screenshot"/></div>

## Setup:
```sh
    git clone https://github.com/spencerlepine/quickcart.git
    cd quickcart
    cp .env.sample .env
```
- Configue the ```.env``` file (**[Configure API Keys](<#configure api keys>)**)
```sh
    npm install
    npm start
```

## Technologies:
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [OpenFoodFacts](https://world.openfoodfacts.org)
- [Google CSE](https://cse.google.com)
- [Material-UI](https://material-ui.com/)
- [Spoonacular](https://spoonacular.com/food-api/docs)

## Features:
- Save grocery items to a database
- Add custom images and values to each item
- View recommended items to buy
- Search for existing products from OpenFoodFacts dump
- Search product images
- Export data to file
- Import from backup file
- Log cart 'purchases'

## Configue API Keys
- Veiw [.env.sample](./LICENSE)
- Create a Firebase project
  - Get Firebase API keys
  - Activate email/pass authentication
  - List <__domain_url__> or __localhost__ under:
    > Authentication > Sign-in method > Authorized domains
  - Configure a Firestore database
  - Update Firestore **rules**
- Retreive Spoonacular API key (after sign-up)

## Contributing

Feel free to begin create a pull request or suggest a feature :D
> See [TODO](./todo.ext)

## License

MIT

---

> [spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)