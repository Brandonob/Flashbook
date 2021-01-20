export const getAPI = () => {
    if(window.location.hostname === "localhost") {
        return "http://localhost:3000"
    } else {
        return "https://facebookapp1996.herokuapp.com"
    }
}