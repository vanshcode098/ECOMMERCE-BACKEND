


const errorHandler= (err,req,res,next) =>{

    const statusCode= err.statusCode || 500;
      

    const message=
    statusCode===500 && process.env.NODE_ENV==="production"
    ? "Internal Server Error"
    : err.message ||  "Internal Server Error";

    res.status(statusCode).json({
          success: false,
          message
    });
};


export default errorHandler;