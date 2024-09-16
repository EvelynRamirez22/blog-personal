import Header from "./components/Header";
import Footer from "./components/Footer"; // Asegúrate de que Footer sea importado correctamente
import { Post } from "./components/Post";
import "./App.css";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };

    getSession();
  }, []);

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Header />
      <button onClick={handleLogin}>Iniciar sesión con Github</button>
      <Post
        titulo={"Título de ejemplo"}
        description={"Descripción foto"}
        link={"IMG-20240903-WA0030.jpg"}
        parrafo={"Este es el párrafo de la foto"}
      />
      <Footer />
    </>
  );
}
