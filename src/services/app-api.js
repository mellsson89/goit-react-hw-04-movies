import axios from "axios";

const api_key = 'f2a63da91c9145b20b904040a0121e26'
export async function appHomePage() {
       try {
           const {data:{results}}=await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
           return results;
       }
        catch (error){
           console.log(error)
        }
    }

  export async function appMoveDetails(movieId)  {
    try {
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
        return data;
    }
    catch (error) {
    }
  }

  export async function appMoviesPage(search) {
    try {
        const {data:{results}}= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}`);
        return results;
    }
      catch (error) {
          console.log(error)
      }
  }

  export async function appMoviesPageHandle(query) {
    try {
        const {data:{results}}=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}`);
        return results;
    }
      catch (error) {
          console.log(error)
      }
  }

  export async function appReviewsPage(id) {
    try {
        const {data: {results}}= await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US`);
        return results;
    }
    catch (error) {
        console.log(error)
    }
  }

export async function appCastPage(id) {
    try {
        const {data: {cast}}= await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`);
        return cast;
    }
    catch (error) {
        console.log(error)
    }
}