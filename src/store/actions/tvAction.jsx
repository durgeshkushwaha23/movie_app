export { removetv } from "../reducers/tvslice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvslice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    // Fetch each endpoint and extract the data property directly
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

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
    // dispatch(loadtv(ultimatedata));
    // Dispatch the action to load the tv data
    dispatch(loadtv(ultimatedata));
  } catch (error) {
    console.log(error); // Log any errors that occur during the API requests
  }
};

  
