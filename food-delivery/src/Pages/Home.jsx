import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const lodeData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    console.log(response);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    lodeData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div>
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div>
                <div key={data._id} >{data.CategoryName}</div>
                <hr />
                <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",maxLines :"100%"}}>
                  {
                  foodItem !== [] ? 
                  foodItem.filter(items => items.CategoryName === data.CategoryName).map((itemData) =>{
                    return(
                      <div >
                        <Card 
                        foodName={itemData.name} 
                        options={itemData.options[0]}
                        imageSrc={itemData.img}
                        />
                      </div>
                    )
                  }) : 
                  <div>No Such Data Found</div>
                  }
                </div>
              </div>
            );
          })
        ) : (
          <div>helo</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// 
