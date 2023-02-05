import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const alerts = useSelector(state => state.alert);

    const renderAlerts = () => {
        return alerts?.map((alert) => {
            const { type, msg } = alert;
            let style;
            if (type === 'red')
                style = { backgroundColor: 'red' };
            else if (type === 'green')
                style = { backgroundColor: 'green' };
            return (
                <div className={`fixed bottom-4 right-4 p-4 text-lg rounded text-white`} style={style}>
                    <p> {msg} </p>
                </div>);
        })
    }

    return (
        <>
            {renderAlerts()}
        </>
    )
}

export default Alert;