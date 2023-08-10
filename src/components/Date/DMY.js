import React from 'react';

function formatDate(date) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${dayOfMonth} ${month} ${year}, ${day}`;
}

const DMY = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    return (
        <>
            {formattedDate}
        </>
    );
}

export default DMY;