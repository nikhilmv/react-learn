import React, { useState } from "react";
import { Button,Modal  } from "react-bootstrap"; // Import Bootstrap Button
import { useDispatch, useSelector } from "react-redux";
import { addBlog,editBlog,deleteBlog } from "../store/slices/blog";
import AddBlogForm from "../pages/AddBlogForm";
import EditBlogForm from "../pages/EditBlogForm";
 

// const blogs = [
//     { id: 1, title: "Understanding React Hooks", author: "John Doe", date: "2025-02-24" },
//     { id: 2, title: "Tailwind CSS: The Future of Styling", author: "Jane Smith", date: "2025-02-22" },
//     { id: 3, title: "How to Optimize React Performance", author: "Alice Johnson", date: "2025-02-20" },
//   ];

  
const BlogListPage = () => {

    const blogs = useSelector((state) => state.blog.blogs);
 
    const [show, setShow] = useState(false); // Modal state
    const [editflag, setEditflag] = useState(false); // Modal state
    const [editvalues, setEditValues] = useState(false); // Modal state
    const dispatch = useDispatch();
    const handleShow = () => {
        setEditflag(false);
        setShow(true);
    } 
    const handleClose = () => setShow(false);

    const handleEdit = (id) => {
        setShow(true);
        setEditflag(true);
        const blog = blogs.find((blog) => blog.id === id);
        setEditValues(blog);
            
    }

    const handleDelete = (id) => {
        dispatch(deleteBlog(id));
   
    }
  const handleAddBlog = (newBlog) => {
  
    dispatch(addBlog(newBlog));
    setShow(false);
  };
  const handleEditBlog = (ExistingBlog) => {
  
    dispatch(editBlog(ExistingBlog));
    setShow(false);
  
  };
  
    return (
        <div className="container mt-4">
          <h2 className="mb-3 text-center">Blog List (example of CRUD using redux toolkit)</h2>
          
          {/* Add Blog Button */}
          <Button variant="success" className="mb-3" onClick={handleShow}>
            + Add Blog
          </Button>
    
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td>
                      <Button 
                        variant="warning" 
                        className="me-2"
                        onClick={() => handleEdit(blog.id)}>
                          Edit
                      </Button>
                      <Button variant="danger" onClick={() => handleDelete(blog.id)}>
                          Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    
          {/* Add Blog Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
              {editflag ? "Edit Blog" : "Add New Blog"}
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {editflag ?  <EditBlogForm onEdit={handleEditBlog} editData = {editvalues}/> :  <AddBlogForm onAdd={handleAddBlog} />}
             
            </Modal.Body>
          </Modal>
        </div>
      );
}
export default BlogListPage;