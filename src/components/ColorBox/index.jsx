import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
ColorBox.propTypes = {

};

function getRandomColor() {
    const colorList = ['pink', 'blue', 'red', 'green', 'yallow'];
    const randomIndex = Math.trunc(Math.random() * 4);
    return colorList[randomIndex];
}

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'pink';
        return initColor;
    });
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div className='color-box'
            style={{ background: color }}
            onClick={handleBoxClick}>
            {/* {color}
            <button onClick={() => setColor('black')}>Change to Black</button>
            <button onClick={() => setColor('white')}>Change to White</button> */}
        </div>
    );
}

export default ColorBox;