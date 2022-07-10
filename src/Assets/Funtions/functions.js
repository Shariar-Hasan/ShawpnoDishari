export const createUser = (name, avater, email, phone, birthdate) => {
  return {
    sd_id: "",
    personalInfo: {
      name: "",
      avater: "",
      email: "",
      phone: "",
      birthDate: "",
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
      verified: false,
      admin: false,
    },
  };
};
