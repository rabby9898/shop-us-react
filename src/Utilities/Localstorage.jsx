const getPhoneIdFromStorage = () => {
  const phoneId = localStorage.getItem("phone");
  if (phoneId) {
    return JSON.parse(phoneId);
  } else {
    return [];
  }
};

const savePhoneIdInLocal = (id) => {
  const prevPhoneId = getPhoneIdFromStorage();
  const isExists = prevPhoneId.find((phoneId) => phoneId.id === id);
  if (!isExists) {
    prevPhoneId.push(id);
    localStorage.setItem("phone", JSON.stringify(prevPhoneId));
  }
};
export { getPhoneIdFromStorage, savePhoneIdInLocal };
