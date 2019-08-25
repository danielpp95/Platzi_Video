import React from 'react'
import '../assets/components/Categories.scss'

export default ({title, children}) => (
    <div className="categories">
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>
)