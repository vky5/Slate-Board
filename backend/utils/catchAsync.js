module.exports = fn=>{
    return (req, res, next)=>{
        fn(req, res, next).catch(next); // can be written as .catch(next);
    }
}