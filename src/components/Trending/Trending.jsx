import { useEffect } from "react";

const Trending = () => {

  useEffect(() => {
    getTrending();
  },[])

  const getTrending = async() => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=f9a3b5aa7e284b55ba91945b369a8628&number=9`
    );
    const data = await api.json();
    console.log(data);
  }
  return (
    <div>
      Trending
    </div>
  )
}

export default Trending;