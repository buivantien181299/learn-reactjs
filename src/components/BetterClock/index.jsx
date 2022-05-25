import React from 'react';
import useClock from '../../hooks/useClock';
import './styles.scss'

BetterClock.propTypes = {

};

function BetterClock(props) {

    const { timeString } = useClock();

    return (
        <div className="better-clock">
            <p className="better-clock-time">{timeString}</p>
        </div>
    );
}

export default BetterClock;