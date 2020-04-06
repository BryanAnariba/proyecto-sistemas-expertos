const controller = {};
var blogs = [];
var blogContent = { 
    siteId: '',
    blogName: '',
    content: ''
};

controller.getBlogs = (req , res) => { // OBTIENE TODOS LOS SITIOS CREADOS
    res.send(blogs);
}

controller.getContent = (req , res) => { // ENVIAR EL CONTENIDO GUARDADO DEL BLOG A FROALA 
    let id = req.params.id;
    console.log(blogs[id]);
    res.send(blogs[id]);
}

controller.saveBlog = (req , res) => {
    blogContent = { 
        siteId: req.body.siteId,
        blogName: req.body.blogName,
        content: req.body.content
    };
    blogs.push(blogContent);
    res.send({ statusRes: 1 , message: 'Blog Creado con Exito' });
}

controller.updateBlog = (req , res) => {
    let id = req.params.id;
    console.log(id);
    let contentUpdate = {
        siteId: req.body.siteId ,
        blogName: req.body.blogName,
        content: req.body.content
    };

    blogs[id] = contentUpdate; // actualizamos con esto
    console.log(blogs);
    res.send({ statusRes: 1 , message: 'Blog o Sitio Actualizado con exito.' });
}

controller.deleteBlog = (req , res) => {
    let siteId = req.params.id;
    blogs.splice(siteId , 1);
    res.send({ statusRes: 1 , message: 'Blog o Sitio eliminado con exito.' });
}
module.exports = controller;