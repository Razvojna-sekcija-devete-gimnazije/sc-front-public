import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header';
import LoadingSpinner from '../Loading/LoadingSpinner';

export default function Layout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    <div className="app-layout">
      <Header />
      
      <main className="main-content">
        {isNavigating ? (
          <LoadingSpinner />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}