import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class CreateBook extends Component{

   render() {
      return (
         <div className="CreateBook">
            <div className="container">
               <div className="row">
                  <div className="col-md-8 m-auto">
                     <br />
                     <Link to="/" className="btn btn-outline-warning">Show Book List</Link>
                  </div>
                  <div className="col-md-8 m-auto">
                     <h1 className="display-4 text-center">Add Book</h1>
                     <p className="lead text-center">
                        Create New Book
                     </p>
                     <form action="">
                        <div className="form-group">
                           <input
                              type="text"
                              placeholder="Title of the Book"
                              name="title"
                              className="form-control"
                              
                           />
                        </div>
                        <div className="form-group">
                           <input
                              type="text"
                              placeholder="ISBN"
                              name="isbn"
                              className="form-control"
                              
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default CreateBook;