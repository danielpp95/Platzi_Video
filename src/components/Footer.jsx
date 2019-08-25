import React from 'react'

import '../assets/components/Footer.scss'

const footer_terms = 'Terminos de uso'
const footer_privacy = 'Declaración de privacidad'
const footer_help = 'Centro de ayuda'

export default () => (
    <footer className='footer'>
        <a href="/">{footer_terms}</a>
        <a href="/">{footer_privacy}</a>
        <a href="/">{footer_help}</a>
    </footer>
)