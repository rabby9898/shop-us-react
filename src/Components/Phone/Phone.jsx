import { Link } from "react-router-dom";

const Phone = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;
  return (
    <div>
      <div className="card w-full h- bg-base-100 shadow-xl">
        <figure className="w-full">
          <img className="w-full " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>Rating:{rating}</p>
          <h4 className="card-title text-lg bg-green-300 p-1">{brand_name}</h4>

          <h2 className="card-title">{phone_name}</h2>
          <p>${price}</p>

          <Link to={`/job-details/${id}`}>
            <button className="btn bg-[#E5E7EB] uppercase outline-none">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Phone;
