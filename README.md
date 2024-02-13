<h1 align="center">
CRYPTOMARKETS
</h1>

<p align="center">
  The ideal platform to find different crypto currencies & their exchanges. <br /> Designed to inspire and encourage individuals to initiate their contributions to the open source community.
</p>

## TechStack Used

- [React.js](https://react.dev/)
- [Redux](https://redux-toolkit.js.org/rtk-query/overview)
- [Ant-Design](https://ant.design/)
- [Material-UI](https://mui.com/material-ui/)
- [Google-Identity-services](https://console.cloud.google.com/apis/credentials/oauthclient/728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com?authuser=1&project=react-cryptoapp)
- [Hosting- Netlify](https://www.netlify.com/)

### 1. Setting up the project locally

**To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com) installed on your computer)**

1. Fork this repository and clone the project

   ```bash
   git clone https://github.com/Prakash-Ravichandran/react_cryptocurrency_app
   ```

2. Go to the project directory

   ```bash
   cd react_cryptocurrency_app
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the server

   ```bash
   npm start
   ```

## The Process

### User Stories

- As a user, I want to be able to navigate to all routes(sidebars) & view all the components.
- As a user, I want to search cryptocurrencies like Bitcoin & view them in detail in `Cryptocurrencies Component`.
- As a user, I want to filter the exchange the currency with amother currency in `Exchange component`.
- As a user, I want to filter the news based on the country in `News Component`.
- As a user, I want to submit the feeback in a form in the `Contact Component`.

### Features

- **Google Identity Services:** users can able to login using their own gmail Id.
- **Mock Server for Login:** Users can able to login with credentials after running the auth server in local.
- **Data Fetching:** App fetches the relevant cryptocurrencies from coinranking, exchanges, news API's.
- **Search:** App renders the specific number of cryptocurrencies per search.
- **Dropdown:** App fetches the required cryptocurrencies according to the selected dropdowns.

### Screenshots

## Login

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/0908c711-7a0e-4adb-807c-393822b765ec)

## HomePage

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/6e8cc066-f828-4b38-ac05-fbc51e8080b1)

## Crpytocurrencies

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/d424a546-aa37-4faf-8cd2-af71703714d8)

## Cryptodetails

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/d1366fdb-1dc3-494b-ad84-df7c6aab1d21)

## Exchange

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/48b7ee63-63fa-4cf3-85ee-392deeb16469)

## News

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/aa110bc5-d41e-4162-b8be-39c0ba0c3aa3)

## Contact

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/bf74cbce-b777-42fa-809e-09b18f727f63)

## Signout

![image](https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/assets/74542543/138907cb-0e62-4bf5-85c5-cb5631b81a76)

### API Services used

- **Coinranking** - [Coinranking](https://coinranking1.p.rapidapi.com)
- **COinbase** - [Exchange](https://api.coinbase.com/v2/exchange-rates)
- **Gnews** - [News](https://gnews.io/api/v4/top-headlines)

## Current Contributors

<a href="https://github.com/Prakash-Ravichandran/react_cryptocurrency_app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Prakash-Ravichandran/react_cryptocurrency_app" />
</a>

## Contact

- Github - [@Prakash-Ravichandran](https://github.com/Prakash-Ravichandran)
- LinkedIn - [@prakash-ravichandran](https://www.linkedin.com/in/prakash-ravichandran/)
- Twitter - [@dev_hustler](https://twitter.com/dev_hustler)

## Show Your Support

Give a ⭐️ if you liked this project!

---

## Errors Fixed

### Exchanges API map fix

[fix-for-map-object-API](https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs)

### Query param fix

[fix-query-param](https://stackoverflow.com/questions/68158110/redux-toolkit-rtk-query-sending-query-parameters)

### Object null or undefined or Function.entries is null

[fix-for-function.entries](https://stackoverflow.com/questions/29721205/how-to-resolve-typeerror-cannot-convert-undefined-or-null-to-object)

### How to create a dynamic table

[how-to-create-a-dynamic-table](https://youtu.be/Z3NBh_PzGDU?si=5OXeHoZUOYhNRpzR)

### Fix for makeStyles dependecy

[fix-for-makeStyles-dependency](https://stackoverflow.com/questions/69366234/uncaught-error-material-ui-makestyles-is-not-longer-exported-from-mui-materia)

### how to send props through router components

[props-through-router-components](https://ui.dev/react-router-pass-props-to-components)
