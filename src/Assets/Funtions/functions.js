export const createUser = (
  sd_id,
  name,
  avater,
  email,
  phone,
  birthDate,
  emailVerified
) => {
  return {
    sd_id,
    personalInfo: {
      name,
      avater,
      email,
      phone,
      birthDate,
    },
    donationInfo: [],
    userPrivacy: {
      email: false,
      phone: false,
      birthDate: false,
      d_info: false,
    },
    accountInfo: {
      active: true,
      verified: emailVerified,
      admin: false,
    },
  };
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
};
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(JSON.stringify(key)));
};
export const clearLocalStorage = () => {
  localStorage.clear();
};

export const clg = (data) => {
  console.log(data);
};
