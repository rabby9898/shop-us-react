import Phone from "../Phone/Phone";

const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <h1 className="text-2xl text-center my-10">Our Phones Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {phones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
