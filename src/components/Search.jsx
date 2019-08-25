import React from 'react';
import '../assets/components/Search.scss';

const mainTitleText = '¿Que quieres ver hoy?';
const maiInputPlaceholder = 'Buscar...';

const Search = () => (
    <section className='main'>
        <h2 className='main__title'>{mainTitleText}</h2>
        <input type='text' className='input' placeholder={maiInputPlaceholder} />
    </section>
);

export default Search;
