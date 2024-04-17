import React from "react";
import { Card } from "./Card";
import backpack from '../assets/img/backpack.png'
import tickets from '../assets/img/tickets.png'
import restaurant from '../assets/img/restaurant.png'
import idea from '../assets/img/idea.png'


export const About = () => {
  return (
    <section className="app__about-container">
      <h3 className="app__about-title">Quem somos nós?</h3>
      <p className="app__about-p">
        Somos um portal de viagens, onde você encontrará inspirações para as
        suas próximas aventuras, desde destinos exóticos até pontos turísticos
        imperdíveis. Explore nossos roteiros cuidadosamente elaborados, descubra
        passeios autênticos, mergulhe em dicas úteis e delicie-se com a
        gastronomia local.
      </p>
      <div className="app__about-card">
        <Card text="Roteiros" img={backpack} />
        <Card text="Passeios" img={tickets} />
        <Card text="Gastronomia" img={restaurant} />
        <Card text="Dicas" img={idea} />
      </div>

    </section>
  );
};
