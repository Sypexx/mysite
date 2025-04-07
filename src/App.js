import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SocialLinks from "./SocialLinks";

function App() {
  return (
    <Router basename="/mysite">
      <div className="App">
        <header className="App-header">
          <SocialLinks />
        </header>
      </div>
    </Router>
  );
}

export default App;