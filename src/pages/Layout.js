import './Layout.scss';
import { Outlet } from "react-router-dom";
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { BackToTheTopOfThePage } from '../components/BackToTheTopOfThePage';

const user = {
    firstName: 'João',
    lastName: 'da Silva',
    age: 28
}

const Layout = () => {
  return (
    <>
      <Header isLoggedIn={false} username={user.firstName} />
      <Outlet />
      <Footer />
      <BackToTheTopOfThePage />
    </>
  )
};

export default Layout;