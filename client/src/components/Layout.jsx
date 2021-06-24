import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const { currentUser, handleLogout, children } = props;

  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
