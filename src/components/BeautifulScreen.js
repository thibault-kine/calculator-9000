import React from 'react';
import '../styles/BeautifulScreen.css'

function BeautifulScreen(props) {

    return (
        <div className="c9k-screen">
            <input 
                type="text"
                placeholder="0"
                value={props.operation}
                onChange={(e) => props.onChange(e)}
            />
        </div>
    )
}

export default BeautifulScreen;