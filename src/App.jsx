import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import Image from './assets/images/Onçapintada.jpg';

export default function App() {
  const bgStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="app
     min-h-screen w-full max-w-5xl
      mx-auto flex flex-col" style={bgStyle}>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}