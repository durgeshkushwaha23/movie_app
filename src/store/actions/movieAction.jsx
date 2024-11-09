export { loadmovie } from "../reducers/movieslice";
import axios from "../../utils/axios";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
      const { detail } = await axios.get(`/movie/${id}`);
      const { externalid } = await axios.get(`/movie/${id}/external_ids`);
      const { recommendations } = await axios.get(`/movie/${id}/recommendations`);
      const { similar } = await axios.get(`/movie/${id}/similar`);
      const { videos } = await axios.get(`/movie/${id}/videos`);
      const { watchproviders } = await axios.get(`/movie/${id}/watch/providers`);
      
      let ultimatedata = {
        detail: detail.data,
        externalid: externalid.data,
        recommendations: recommendations.data,
        similar: similar.data,
        videos: videos.data,
        watchproviders: watchproviders.data,
      };
      
      console.log(ultimatedata); // assuming loadmovie is an action creator
    } catch (error) {
      console.log(error);
    }
  };
  
