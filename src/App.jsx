import Update from './components/update/Update';
import UpdateResult from './components/updateResult/UpdateResult';
import './app.css';
import store from './redux/store';

const App = () => {
  console.log('This is the store: ', store);
  return (
    <>
      <div className="container">
        <Update />
      </div>

      <div className="container">
        <UpdateResult />
      </div>
    </>
  );
};

export default App;
