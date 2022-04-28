import { eventBusService } from '../../services/event-bus-service.js';

class SearchArea extends React.Component {
  searchBar = React.createRef();
  componentDidMount() {}

  changeFilter = () => {
    console.log('clicked');
    eventBusService.emit('filter', this.searchBar.current.value);
  };

  render() {
    return (
      <section className="search-area">
        <button className="search-button" />
        <input
          className="search-bar"
          type="text"
          placeholder="Search mail"
          ref={this.searchBar}
          onChange={this.changeFilter}
        />

        <button className="filter-button" />
      </section>
    );
  }
}

export default SearchArea;
