import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#fac20b',
  inactiveFillColor: '#d6d6d6',
  itemStrokeWidth: 0,
}

export default function Third() {
  const [rating, setRating] = useState(0); // Initial value

  return <Rating style={{ maxWidth: 280 }}  value={rating} onChange={setRating} itemStyles={myStyles} spaceInside={"medium"} />;
}
