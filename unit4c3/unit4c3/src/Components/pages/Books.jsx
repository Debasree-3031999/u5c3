import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
 display: grid;
 grid-template-columns: repeat(3,1fr);
 color:blue;
 
`;


const Books = ({children}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const func = async () => {
      try {
        let res = await fetch("http://localhost:8080/books");
        let data = await res.json();
       //  console.log(data);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  return (
    <>
     
   
      <Grid  data-testid="books-container" className="container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
            {data.map((books, index) => {
        return (
          <BookCard
         
            key={books.id}
            {...books}
         
          />
        );
      })}
            

           
      </Grid>
      
    </>
  );
};
export default Books;
