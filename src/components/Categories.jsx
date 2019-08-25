import React from 'react'

export default ({children}) => (
    <div className="categories">
        <h3 className="categories__title">{}</h3>
        {children}
    </div>
)