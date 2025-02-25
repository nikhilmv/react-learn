import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
    blogs: JSON.parse(localStorage.getItem("blogs")) || [],
}

const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
        addBlog:(state,action) => {
            state.blogs.push(action.payload); 
            localStorage.setItem('blogs', JSON.stringify(state.blogs));  
        },
        editBlog:(state,action) => { 
            const { id} = action.payload;
            const index = state.blogs.findIndex((blog) => blog.id === id);
            state.blogs[index] = action.payload;
            localStorage.setItem('blogs', JSON.stringify(state.blogs));
        },
        deleteBlog:(state,action) => { 
            const cpyBlogList = state.blogs.filter((blog) => blog.id !== action.payload);
            state.blogs = cpyBlogList;
            localStorage.setItem('blogs', JSON.stringify(state.blogs));
        },
    }
})

export const {addBlog, editBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;