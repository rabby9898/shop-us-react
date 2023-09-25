import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import {
  getPhoneIdFromStorage,
  savePhoneIdInLocal,
} from "../../Utilities/Localstorage";

const JobDetails = () => {
  const [phone, setPhone] = useState([]);
  const [total, setTotal] = useState(0);
  const { image, phone_name, brand_name } = phone;

  const { id } = useParams();
  console.log(id);
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  const handleAlert = () => {
    const selectedPhoneIds = getPhoneIdFromStorage();
    const totalPrice = phones.reduce(
      (prevValue, currentItem) => prevValue + currentItem.price,
      0
    );
    if (selectedPhoneIds.includes(id)) {
      return swal("Oops!", "Already Selected This item!", "error");
    } else {
      savePhoneIdInLocal(id);
      setTotal(totalPrice);
      return swal("Great!", "Your Product is added!", "success");
    }
  };
  return (
    <div className="">
      <div className="card w-3/5 card-side bg-base-100 shadow-xl mx-auto my-16">
        <figure>
          <img className="w-[300px] h-[350px]" src={image} alt="Movie" />
        </figure>
        <div className="flex items-center">
          <div>
            <h2 className="card-title">{brand_name}</h2>
            <p>{phone_name}</p>
            <div className="my-5">
              <button
                onClick={handleAlert}
                className="btn bg-green-200 uppercase "
              >
                Add To Favorites →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
