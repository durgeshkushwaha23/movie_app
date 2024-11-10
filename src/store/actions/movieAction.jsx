export { removemovie } from "../reducers/movieslice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieslice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    // Fetch each endpoint and extract the data property directly
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

    // Combine all data into one object
    let ultimatedata = {
      detail: detail.data, 
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m)=>m.type==="Trailer"),  
      watchproviders: watchproviders.data.results.IN,
    };
    
    // console.log(ultimatedata); // Logging the data to check if it's correct
    // dispatch(loadmovie(ultimatedata));
    // Dispatch the action to load the movie data
    dispatch(loadmovie(ultimatedata));
  } catch (error) {
    console.log(error); // Log any errors that occur during the API requests
  }
};

  
