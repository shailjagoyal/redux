
// import './apiCall'
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import FoodContainer from './components/FoodContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FoodContainer />
        {/* <CakeContainer />
        <ItemContainer cake/> */}
        {/* <NewCakeContainer /> */}
        {/* <HooksCakeContainer /> */}
        {/* <IceCreamContainer />
        <ItemContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
