const validateCreateTask=(req,res,next)=>{
    const {title}=req.body;

    if(!title || title.trim()==="")
    {
        return res.status(400).json({
            message:"Title is required"
        })
    }
    next();

}

const validateUpdateTask = (req, res, next) => {
    const { title } = req.body;

    if (title !== undefined && title.trim() === "") {
        return res.status(400).json({
            message: "Title cannot be empty"
        });
    }

    next();
};

module.exports={
    validateCreateTask,validateUpdateTask
}