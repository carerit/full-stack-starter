import { Helmet } from 'react-helmet-async';
import { useStaticContext } from './StaticContext';
import React from 'react';
import './Colors.scss'

function AboutPage() {

    const staticContext = useStaticContext();

    return (
        <>
            <Helmet>
                <title>About - {staticContext?.env?.VITE_SITE_TITLE ?? ''}</title>
            </Helmet>

            <main className='container'>

                <h1 className='text-indigo'>About</h1>
                <p>This is the about page</p>
            </main>
        </>


    );

}

export default AboutPage;