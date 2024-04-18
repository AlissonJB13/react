import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //cleanup
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.userEmail,
        data.userPassword
      );

      await updateProfile(user, {
        displayName: data.userName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemMessageError;

      if (error.message.includes("password")) {
        systemMessageError = "A senha precisa conter 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemMessageError = "E-mail já cadastrado";
      } else if (error.message.includes("invalid-email")) {
        systemMessageError = "Por favor insira um e-mail válido";
      } else {
        systemMessageError =
          "Ocorreu um erro, por favor tente novamente mais tarde";
      }
      setLoading(false);

      setError(systemMessageError);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
