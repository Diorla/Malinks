import firebase from "./clientApp";

export const google = new firebase.auth.GoogleAuthProvider();
export const facebook = new firebase.auth.FacebookAuthProvider();

const authLogin = (type: firebase.auth.AuthProvider) => {
  try {
    firebase
      .auth()
      .signInWithPopup(type)
      .then((res) => console.log("login successful: ", res))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("sign-in error: ", error);
  }
};

export default authLogin;
