import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Vegetarian = () => {

  const [Veges, setVeges] = useState([]);

  useEffect(() => {
    getVeggie();
  },[])

  const getVeggie = async() => {

    // const check = localStorage.getItem("Veges");

    // if(check){
    //   setVeges(JSON.parse());
    // } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=f9a3b5aa7e284b55ba91945b369a8628&number=9&tags=vegetarian`
      );

      //localStorage.setItem(JSON.stringify(data.recipes));
      const data = await api.json();
      console.log(data);
      setVeges(data.recipes)
    // }
  }
  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}>
          {Veges.map(function(Vege){
            return(
              <SplideSlide>
                <Card key={Vege.id}>
                  <p>{Vege.title}</p>
                  <img src={Vege.image} alt="" />
                  <Gradient/>
                </Card>
              </SplideSlide>

            )
          })}
        </Splide>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height:25rem;
  border-radius: 2rem;
  overflow-x: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width:100%;
    height:100%;
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align:center;
    width:100%;
    font-weight: 600;
    font-size: 1 rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Vegetarian;