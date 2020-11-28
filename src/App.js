import { Home } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";

function App() {
	return (
		<Router>
			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
		</Router>
	);
}

export default App;
