import Update from './components/update/Update';
import UpdateResult from './components/updateResult/UpdateResult';
import './app.css';

const App = () => (
  <div style={{ justifyContent: 'center' }}>
    <div className="container">
      <Update />
    </div>

    <div className="container">
      <UpdateResult />
    </div>
  </div>
);

export default App;
