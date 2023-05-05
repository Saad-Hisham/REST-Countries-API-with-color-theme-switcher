import { createSlice, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  filteredData: [],
  DetailsCountry:{},
  loading: false,
  error: null,
  mode:"light",
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    getDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    filterByName: (state, action) => {
      // this function will filter the countries depends on input value
      function filterArrayBySubstring(arr, substring) {
        const regex = new RegExp(substring, 'i');
        return arr.filter(element => regex.test(element.name.common));
      }
      //set the new value
      const filteredCountries = filterArrayBySubstring(state.data, action.payload);
      state.filteredData = filteredCountries
    },
    filterByContinent: (state, action) => {
      state.filteredData = state.data.filter((country) => { return country.region == action.payload });
      if (action.payload == "All") {
        state.filteredData = state.data
      }
    },
    changeTheme:(state,action)=>{
      if(state.mode=="light"){
        state.mode ="dark";
        localStorage.setItem("mode",state.mode);
        document.body.classList.remove("light")
        document.body.classList.add(localStorage.getItem("mode"))
      }
      else{
        state.mode = "light"
        localStorage.setItem("mode",state.mode)
        document.body.classList.remove("dark")
        document.body.classList.add(localStorage.getItem("mode"))


      }
      
    },
    showDetails:(state,action)=>{
      state.DetailsCountry=action.payload;
      localStorage.setItem("details",JSON.stringify(state.DetailsCountry))
    }

  },
});

export const { getDataStart, getDataSuccess, getDataFail, filterByName, filterByContinent ,changeTheme,showDetails} = dataSlice.actions;
export default configureStore({
  reducer: dataSlice.reducer,
});

export const fetchData = () => async (dispatch) => {
  dispatch(getDataStart());
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data;
    dispatch(getDataSuccess(data));
  } catch (error) {
    dispatch(getDataFail(error.message));
  }
};