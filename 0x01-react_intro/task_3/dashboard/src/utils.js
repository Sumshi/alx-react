// Create a function named getFullYear that will return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

// Create a function named getFooterCopy that will return the following string
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School';
    }
    return 'Holberton School main dashboard';
}

// Create a function named getLatestNotification that will return the following string
export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD';
}