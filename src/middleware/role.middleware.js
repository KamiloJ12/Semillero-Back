const hasRoles = (...roles) => {
    return (req, res, next) => {
        const { rol } = req.usuario;
        if(!roles.includes(rol)) {
            return next({
                status: 401,
                message: `Usuario necesita uno de los siguiente roles: ${roles} - su rol es ${rol}`
            });
        }
        next();
    }
}

module.exports = {
    hasRoles
}