import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
 
const EditBlogForm = ({ onEdit,editData}) => {
    const [id, setId] = useState(""); 
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState(""); 

    useEffect(() => {
      if (editData) {
        setId(editData.id);
        setTitle(editData.title);
        setAuthor(editData.author);
        setDate(editData.date); 
      } 
    },[editData]);

    const handleSubmit = (e) => {
        e.preventDefault();
  
        const formData = {
            id: id,
            title :title,
            author:author,
            date:date
        };
      
        onEdit(formData);
        
   
    }

    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3"> 
            <Form.Control
              type="hidden" 
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
          />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Form.Group>
    
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
    
          <Button variant="primary" type="submit">
              Update Blog
          </Button>
        </Form>
      );

};

export default EditBlogForm;