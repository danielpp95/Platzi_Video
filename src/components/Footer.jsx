import React from 'react';

import '../assets/components/Footer.scss';

const footerTerms = 'Terminos de uso';
const footerPrivacy = 'Declaración de privacidad';
const footerHelp = 'Centro de ayuda';

const Footer = () => (
    <footer className='footer'>
        <a href='/'>{footerTerms}</a>
        <a href='/'>{footerPrivacy}</a>
        <a href='/'>{footerHelp}</a>
    </footer>
);

export default Footer;
