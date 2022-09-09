import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form1 from './forms/Form1';
import './css/nav.css';
import './css/footer.css';
import './css/forms.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Navbar />
      <Form1 />

      <Footer />
    </>
  );
}

export default App;
