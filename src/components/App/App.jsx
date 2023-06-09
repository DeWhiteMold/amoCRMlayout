import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
