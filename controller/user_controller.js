const homepage = (req, res)=>{
    res.status(200).render("index", {title : "Home page"});
}

const tasksPage = (req, res)=>{
    res.status(200).render("tasks", {title: "All Tasks"});
}

const createTaskPage = (req, res)=>{
    res.status(200).render("createTask", {title: "Create Tasks"});
}

module.exports ={
    homepage,
    tasksPage,
    createTaskPage
}