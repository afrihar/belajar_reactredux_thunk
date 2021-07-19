import './App.css';
import {Provider} from 'react-redux'
import UserPage from "./pages/UserPage";
import store from './store'

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <UserPage/>
        </div>
      </Provider>
  );
}

export default App;
