import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let fetchPosts = createAsyncThunk('posts data', async() => {
  let res = await fetch()
  // let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  // let data = await res.json()
  return res
})


let initialState = {
  loading: false,
  posts: [],
  error: ''
}


let postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false
      state.posts = action.payload
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false,
      state.error = action.error
    });
  }
})

export default postSlice.reducer