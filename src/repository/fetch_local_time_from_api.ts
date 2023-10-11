export const fetchLocalTimeFromAPI = async (timezone = "Europe/London") => {
    const requestString = `https://timeapi.io/api/Time/current/zone?timeZone=${timezone}`;
    try {
        const response = await fetch(requestString);
        if (response.ok) {
            console.log("Fetched: " + requestString);
            return await response.json();
        } else {
            console.log(requestString);
            console.log(response.status, response.statusText);
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
