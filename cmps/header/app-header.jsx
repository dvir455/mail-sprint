import SearchArea from '../header/search-area.jsx';
export class AppHeader extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="left-section">
          <img className="hamburger" src="./assets/imgs/hamburger.svg" />
          <img className="logo" src="./assets/imgs/google-logo.png" />
        </div>
        <SearchArea />
      </header>
    );
  }
}
