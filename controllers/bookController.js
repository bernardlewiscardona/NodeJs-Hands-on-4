const { render } = require('ejs');
const Books = require('../model/book');

//Get all books
const bookIndex = (req, res) =>{
    Books.find().sort({createdAt: -1})
    .then((result)=>{
        res.render('index', {title: "Home", books: result})
    })
    .catch((err)=>{
        console.log(err);
    })
}

//Find books
const bookFind = (req,res) => {
    let id = req.params.id;
    Books.findById(id)
    .then((result)=>{
        res.render('find', {title: "find", books: result})
    })
    .catch((err)=>{
        console.log(err)
    })
}

//Add books
const bookAdd = (req, res) => {
    // console.log(req.body);
    const book = new Books(req.body)
    book.save()
    .then(result => res.redirect("/"))
    .catch(err => console.log(err))
}

//Update books
const book_update = (req, res) => {
    let id = req.params.id;
    Books.findById(id).then((result)=>{
        res.render('update',{books: result, title: "Book Details"})
    })
    .catch((err)=>{
        console.log(err)
    })
}
const bookUpdate = async (req, res) => {
    let id = req.params.id
    let booksToUpdate = await Books.findByIdAndUpdate(id, {
        title: req.body.title,
        coverimg: req.body.coverimg,
        order: req.body.order,
        completed: req.body.completed,
        author: req.body.author
    })
    if(!booksToUpdate) return res.status(404).send('Book is not updated');
    res.redirect('/')
        
}

const bookDelete = async (req, res)=>{
    let id = req.params.id
    let deleteBook = await Books.findByIdAndDelete(id)
    if(!deleteBook){
        return res.status(404).send('Cannot delete the book').redirect('/')
    }
    else{
        return res.status(200).redirect('/');
    }
}

const bookAddPage = (req,res) => {
    res.render('add',{title: "Add Book"});

}

module.exports = {
    bookIndex,
    bookAdd,
    bookFind,
    book_update,
    bookUpdate,
    bookDelete,
    bookAddPage
}
