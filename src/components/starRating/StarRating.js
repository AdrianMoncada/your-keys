import React from "react";
import { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { useEffect } from "react";
import Swal from "sweetalert2";

const DivStarRating = styled.div`
  input[type="radio"] {
    display: none;
  }

  .stars {
    cursor: pointer;
    transition: color 200ms;
  }
`;

const StarRating = ({ carId }) => {
  const { state } = useContext(AppContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [scores, setScores] = useState()

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.144.167.227:8080/vehicle/score/${carId}`
    })
      .then((res) => {
        setScores(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
    if(state.isLogin) {
        const objScore = {
          score: ratingValue,
          user: {
            idUser: parseInt(state.user.map((i) => i.idUser)),
          },
          vehicle: {
            idVehicle: parseInt(carId),
          },
        };
        axios({
          method: "post",
          url: "http://3.144.167.227:8080/score",
          headers: {
            "Content-Type": "application/json",
            Authorization: state.user.map((user) => user.token).toString(),
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          data: objScore,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para dar una calificación tienes que estar registrado',
          })
    }
  };

  return (
    <DivStarRating>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="stars"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#000000"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={25}
            />
          </label>
        );
      })}
    </DivStarRating>
  );
};

export default StarRating;
