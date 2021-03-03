export const getAPI = () => {
    if(window.location.hostname === "localhost") {
        return "http://localhost:3001"
    } else {
        return "https://flashbook-app.herokuapp.com"
    }
}