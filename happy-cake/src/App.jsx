import Navigation from "./components/Navigation"
import ConnectedRoutes from "./routes/ConnectedRoutes"
import "./App.css";
/* alba consulta el tema de las vistas es necesario hacer una carpeta view o page?, por lo que tenia entendido tambien se podria dejar en components, que es lo mas recomendable? o es a gusto de cada uno nomas? */
const App = () => {
 
  return (
    <>
    <Navigation/>
     <ConnectedRoutes />
    </>
  )
}

export default App
