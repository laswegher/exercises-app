import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { ExerciseProvider } from '../context/ExerciseProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ExerciseProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ExerciseProvider>
  );
}

export default MyApp;
