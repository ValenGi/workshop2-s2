import React from 'react'
import './Home.scss';

const Home = () => {
    return (
        <section className='home__container'>
            <article className='home__article'>
                <p className='home__article--top'>SO, YOU WANT TO TRAVEL TO</p>
                <p className='home__article--principal'>SPACE</p>
                <p className='home__article--bottom'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <article className='home__article center'>
                <span className='home__article--circle'>EXPLORE</span>
            </article>
        </section>
    )
}

export default Home;