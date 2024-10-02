import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Section2 from './Pages/Home/Section2';
import Section3 from './Pages/Home/Section3';
import Section4 from './Pages/Home/Section4';
import Section5 from './Pages/Home/Section5';
import Layout from './components/Layouts/Layout';
import Section6 from './Pages/Home/Section6';
function App() {
  return (

<Router>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path="/about" element={
      <>
      <Layout  >
      <Section2/>
      </Layout>
      </>
    } />
    <Route path="/menu" element={
            <>
            <Layout>
            <Section3/>
            </Layout>
            </>
    } />

<Route path="/shop" element={
            <>
            <Layout>
            <Section3/>
            </Layout>
            </>
    } />

    <Route path="/blog" element={
      <>
      <Layout>
      <Section4/>
      </Layout>
      </>
    } />
    <Route path="/contact" element={
      <>
      <Layout>
      <Section5/>
      <Section6/>
      </Layout>
      </>
    } />


  </Routes>
</Router>
  );
}

export default App;
