import Home from "./pages/home/page";
import { RootLayout } from "./layout/layout";

const App = () => {
  return <Home />;
};

export default () => {
  return (
    <RootLayout>
      <App />
    </RootLayout>
  );
};
