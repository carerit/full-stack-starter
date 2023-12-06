import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import Item from './Item';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';

function Home() {


  const { user } = useAuthContext();
  const [data, setData] = useState();
<<<<<<< HEAD

=======
>>>>>>> e27e87d (improved home and nav bar functionality)
  useEffect(() => {
    fetch('/api/items')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const staticContext = useStaticContext();


  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1 >Home</h1>
        <div className='row'>
          {data?.map((record) => (
            <div className='col-lg-4' key={record.id}>
              <Item key={record.id} record={record} />
            </div>
          ))}

        </div>

      </main>
    </>
  );
}

export default Home;
