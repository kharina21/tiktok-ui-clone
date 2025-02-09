import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { publicRoutes } from "~/routes";
function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/following">Following page</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile page</Link>
                    </li>
                </ul>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
