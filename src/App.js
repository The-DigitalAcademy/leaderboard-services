// import logo from './logo.svg';
import './App.css';
import CustomizedTables from './components/leaderboard/test';
import Leaderboard from './components/leaderboard/leaderboard';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
   {/* <Leaderboard/> */}
   
    <CustomizedTables/>
    </div>
  );
}

export default App;
