import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AlertCircle, X } from "lucide-react";
import { auth, Providers } from "../services/firebase";

const AuthContainer: React.FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, Providers.google);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(`Error: ${error.message}`);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        className="text-googlefont font-sm py-2 px-4 rounded-3xl bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="button"
        onClick={signInWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Acceder con Google"}
      </button>

      {errorMessage && (
        <div className="mt-4 w-full bg-red-100 text-red-700 border border-red-400 rounded-lg p-4 flex items-center relative">
          <AlertCircle className="mr-2 w-5 h-5" />
          <span className="flex-1">{errorMessage}</span>
          <button
            className="absolute right-2 top-2 text-red-700 hover:text-red-900"
            onClick={() => setErrorMessage("")}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
