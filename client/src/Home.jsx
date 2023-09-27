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
        <div >hello</div>
        <Item title="apple"></Item>
        <Item title="banana"></Item>
        <Item title="fruits"></Item>

      </main>
    </>
  );
}

export default Home;
