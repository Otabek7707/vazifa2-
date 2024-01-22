import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Kids":"Kids",
      "Tutors":"Tutors",
      "Courses":"Courses",
      "Group Lessons":"Group Lessons",
      "Resources":"Resources",
      "Business":"Business",
      "LogIn":"Log in",
      "SignUp":"Sign up",

    }
  },
  uz: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "kids":"bolalar",
      "Tutors":"Repetitorlar",
      "Courses":"Kurslar",
      "Group Lessons":"Guruh darslari",
      "Resources":"Manba",
      "Business":"Biznes",
      "LogIn":"Kirish",
      "SignUp":"Ro'yxatdan o'tish",
      
    }
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;