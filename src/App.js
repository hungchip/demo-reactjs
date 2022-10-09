import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './components/GlobalStyles';
import DefaultLayout from './components/Layout';
import { routes } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/Layout/AdminLayout';
function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.isPrivate === false ? DefaultLayout : AdminLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  );
}

export default App;
