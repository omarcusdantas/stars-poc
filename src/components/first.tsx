import ReactStars from "react-stars";

const ratingChanged = (newRating: number) => {
  console.log(newRating);
};

export default function First() {
  return (
    <div>
      <ReactStars count={5} onChange={ratingChanged} size={55} color2={"#fac20b"} color1={"#d6d6d6"} className="stars"/>
    </div>
  );
}
