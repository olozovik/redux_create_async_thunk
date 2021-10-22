import { addWord, getWords } from './fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  (_, { rejectWithValue }) => {
    try {
      return getWords();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addNewWord = createAsyncThunk(
  'words/addWord',
  async (newWord, { rejectWithValue }) => {
    try {
      return await addWord(newWord);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
