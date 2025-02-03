const signupPage = (req, res)=>{
    res.status(200).render("auth/signup", {title: "Signup page"});
}

const loginPage = (req, res)=>{
    res.status(200).render("auth/login", {title: "Login page"});
}

module.exports ={
    signupPage,
    loginPage
}