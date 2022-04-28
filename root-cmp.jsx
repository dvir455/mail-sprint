import EmailDetail from './cmps/emails/email-detail.jsx';
import { AppHeader } from './cmps/header/app-header.jsx';
import EmailApp from './pages/email-app.jsx';
import SideNav from './cmps/side-nav/side-nav.jsx';
import EmailCompose from './cmps/compose/email-compose.jsx';

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  const [isComposeOpen, setIsComposeOpen] = React.useState(false);

  const setTrue = () => {
    setIsComposeOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <button onClick={setTrue}>DVIR</button>
      <Router>
        <AppHeader />
        <section className="app">
          <SideNav />
          <Switch>
            <Route path="/mail/:id" component={EmailDetail} />
            <Route path="/:filter?" component={EmailApp} />
          </Switch>
        </section>
        {isComposeOpen && <EmailCompose setIsComposeOpen={setIsComposeOpen} />}
        {/* <UserMsg /> */}
      </Router>{' '}
    </React.Fragment>
  );
}
