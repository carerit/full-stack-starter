import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import Item from './Item';

function Home() {
  const staticContext = useStaticContext();
  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1 >Home</h1>
        <Item title="Item 1"></Item>
        <Item title="Item 2"></Item>
        <Item title="Item 3"></Item>

      </main>
    </>
  );
}

export default Home;
