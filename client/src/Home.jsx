import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import Item from './Item';
import { useParams, useState, useEffect } from 'react';

function Home() {

  const staticContext = useStaticContext();

  const [data, setData] = useState();
  useEffect(() => {
    const token = 'patpzeJGcJ0aHfK6J.e9011b3d993570931a90fb1f5597cd7c07304a39fd3cbbd97b5eb2c2c5c4cbe5';
    const url = 'https://api.airtable.com/v0/appvoUbpT81hh1l9f/Table%201?view=Grid%20view';

    fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }
    , []);

    console.log(data);

  return (
    <>
      <Helmet>
        <title>Home - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
      </Helmet>
      <main className="container">
        <h1 >Home</h1>
        {data?.records.map((record) => <Item key={record.id} record={record} />)}
      </main>
    </>
  );
}

export default Home;
