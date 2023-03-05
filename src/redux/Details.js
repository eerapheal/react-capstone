import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://disease.sh/v3/covid-19/continents';

export const getCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const resolve = await fetch(url);
  const countries = await resolve.json();
  return countries;
});

const DataSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: null,
  },

  reducers: {},

  extraReducers(builder) {
    builder.addCase(getCountries.pending, (state) => {
      const isPending = state;
      isPending.status = 'loading';
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      const fulfilled = state;
      fulfilled.status = 'fulfilled';
      fulfilled.countries = action.payload;
    });
  },
});
export default DataSlice.reducer;
