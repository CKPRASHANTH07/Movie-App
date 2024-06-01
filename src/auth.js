export const isAuthenticated = () => {
    const token = localStorage.getItem('accessToken-site'); 
    return token ? true : false;
};