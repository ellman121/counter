import store from '../redux/store';

const App = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default store.withRedux(App);
