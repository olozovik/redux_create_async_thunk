import { createSlice } from '@reduxjs/toolkit';
import { addNewWord, fetchWords } from './operations';

const wordsSlice = createSlice({
  name: 'words',
  initialState: { entities: [], loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchWords.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(fetchWords.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addNewWord.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewWord.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.loading = false;
      })
      .addCase(addNewWord.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const wordsReducer = wordsSlice.reducer;
