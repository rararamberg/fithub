import Footer from "./Footer";
import Header from "./Header";
import './Layout.css'

function Layout(props) {
  const { currentUser, handleLogout, children } = props;

  return (
    <div className="layout-div">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
