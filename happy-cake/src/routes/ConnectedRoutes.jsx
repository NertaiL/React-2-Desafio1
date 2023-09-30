import { Routes as Rs, Route as R } from "react-router-dom";
import HomePage from "../components/HomePage";
import Contact from "../components/Contact";
import Showcase from "../components/Showcase";
import Notfound from "../components/Notfound";

const ConnectedRoutes = () => {
  return (
    <>
      <Rs>
        <R path="/" element={<HomePage />} />
        <R path="contact" element={<Contact />} />
        <R path="showcase" element={<Showcase />} />
        <R path="*" element={<Notfound />} />
      </Rs>
    </>
  );
};

export default ConnectedRoutes;
