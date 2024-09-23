import Header from "./components/Header";
import Footer from "./components/Footer"; // Asegúrate de que Footer sea importado correctamente
import { Post } from "./components/Post";
import "./App.css";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);

    //Switch -> se aplican cuando tenemos que elegir entre ciertas opciones
    //dependiendo de la expresion que evalua acciona de cierta manera
    const {
      data: { subscription }, //estar subscrito a algo significa estar esperando un evento
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SINGED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
          console.log("caso no estimado");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    //Pide el singInWithOAuth y despues destructuramos solamente el error
    await supabase.auth.signInWithOAuth({
      provider: "github", //establece a github para vincuar
    });
  };

  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {user ? (
        <div>
          <h2>Authenticated</h2>
          <button onClick={handleLogOut}>logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>login Github</button>
      )}
      <Header />
      <Post
        titulo={"Título de ejemplo"}
        description={"Descripción foto"}
        link={"IMG-20240903-WA0030.jpg"}
        parrafo={"5to año subiendo la sierra 'Benjamin'."}
      />
      <Footer />
    </>
  );
}
