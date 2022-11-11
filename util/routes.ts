const routes = {
    home: "/",    
    //Authentication
    signup: "/auth/signup", //Auth first reaches signup before proceeding further
    login: "/auth/login",
    //dasboard
    dashboardOverview: "/dashboard",
    api: {
        server: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users',
         },
}

export default routes