import './App.css';


import LoginPage from './container/LoginPage'
import SmallSidebar from './container/SmallSidebar'
import BigSidebar from './container/BigSidebar'

function App() {
  return (
    <div className="App">
    <SmallSidebar />
    <BigSidebar />
    <LoginPage />
    </div>
  );
}

export default App;
