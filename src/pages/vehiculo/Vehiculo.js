import React, { useContext, useState, useEffect } from "react";
import List from "../../assets/list.json";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  DetailDiv,
  DivName,
  DivLocation,
  DivContainerCategory,
  DivContainerLocation,
  DetailContent,
} from "../vehiculo/vehiculoStyles";
const DetailProduct = () => {
  const { carId } = useParams();
  console.log(carId);
  const [carInfo, setCarInfo] = useState({});
  useEffect(() => {
    const findCart = List.find((x) => x.id === carId);
    setCarInfo(findCart);
  }, [carId]);

  if (carInfo === null) {
    return <h1>Cargando</h1>;
  }

  return (
    <React.Fragment>
      <DetailDiv>
        <DivContainerCategory>
          <DivName>
            <h3>{carInfo.category}</h3>
            <h1>{carInfo.title}</h1>
          </DivName>
          <Link to="/">
            <span>
              <IoIosArrowBack />{" "}
            </span>
          </Link>
        </DivContainerCategory>
        <DivContainerLocation>
          <DivLocation>
            <h3>{carInfo.location}</h3>
          </DivLocation>
        </DivContainerLocation>
      </DetailDiv>
     <DetailContent><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida ex ut felis interdum pulvinar. Donec non scelerisque ligula, sed interdum purus. Integer feugiat, quam ut varius ultricies, tellus urna sodales neque, a elementum erat sapien eget mauris. Maecenas a diam ac elit pretium vestibulum. Morbi lorem neque, pretium eget velit et, congue varius sapien. Quisque dictum elit id purus ultrices ultrices. Duis ullamcorper in diam lacinia vestibulum.

Vestibulum fermentum sapien orci, a varius tortor egestas sit amet. Fusce nec justo turpis. Phasellus ullamcorper, felis quis facilisis suscipit, eros dolor sodales urna, nec porttitor orci mauris sit amet sapien. Donec pharetra ex mi, non laoreet purus semper eget. Duis pharetra justo finibus tortor gravida accumsan. Mauris tempus mauris eu aliquet elementum. In vel tortor convallis, molestie ex sit amet, ornare felis. Nullam semper id ipsum at maximus. Morbi a pellentesque arcu. Nullam fermentum sollicitudin nulla, eget maximus urna. Integer posuere nisi pulvinar, vehicula neque at, vulputate nulla. Suspendisse potenti. Phasellus sit amet vestibulum ipsum.</p></DetailContent>
    </React.Fragment>
  );
};

export default DetailProduct;
