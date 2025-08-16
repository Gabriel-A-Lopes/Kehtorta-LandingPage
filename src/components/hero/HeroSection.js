/*src/components/HeroSection/HeroSection.js */

import { useEffect, useState } from "react";
import cafe from "./../../assets/cafe.jpg";
import capuccino from "./../../assets/capuccino.jpg";
import mousse from "./../../assets/mousse.jpg";
import ovomaltine from "./../../assets/ovomaltine.jpg";
import pedaco_chocolate from "./../../assets/pedaco_chocolate.jpg";
import torta_pote from "./../../assets/torta_pote.jpg";
import torta_suspiro from "./../../assets/torta_suspiro.jpg";
import "./HeroSection.css";
import { Button } from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';

function HeroSection() {
  const imagens = [cafe, capuccino, mousse, ovomaltine, pedaco_chocolate, torta_pote, torta_suspiro];
  const [indiceAtual, setIndiceAtual] = useState(0);

  //hero section image loop
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
    }, 2250);

    return () => clearInterval(intervalo);
  }, [imagens.length]);

  return (
    <section className="hero-section">
      <div className="carrossel-container">
        <img
          src={imagens[indiceAtual]}
          alt={`Imagem ${indiceAtual + 1} do carrossel`}
          className="imagem-carrossel"
        />
        <div className="carrossel-overlay"></div>
      </div>
    <Button as={"a"} className="button-comprar" href="https://kehtorta.goomer.app/" size="x-lg" colorScheme="orange" leftIcon={<FaShoppingCart />}>FAÇA O SEU PEDIDO!</Button>
    </section>
  );
}

export default HeroSection;