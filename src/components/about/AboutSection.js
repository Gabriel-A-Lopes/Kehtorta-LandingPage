import './AboutSection.css';
import perfil from "./../../assets/perfil.jpg";
import { Stack, Text } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="conteudo-principal">
        <div className="introducao">
          <h2><strong>Quem somos?</strong></h2>
          <p>O kehtorta nasceu da ideia de compartilhar momentos com os amigos e familiares à mesa, e esta é a tradição que amamos manter com os nossos clientes através de doces artesanais feitos meticulosamente para adoçarem as festas em família. Nos orgulhamos em entregar uma experiência que vai além dos doces dispostos na mesa, oferecendo conexão e carinho em cada pedido. Cada pedido é feito com muita dedicação, cada item do menu é escolhido a dedo, com receitas testadas e aprovadas, para que os seus momentos sejam mais do que especiais.</p>
          <p>Não deixe de fazer o seu pedido hoje!</p>
        </div>
        <div className="perfil-e-contatos">
          <div className="foto-perfil">
            <img src={perfil} alt='foto de perfil' className="perfil-image"></img>
          </div>
          <div className="contatos">
            <h3>Contatos / Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/kehtorta/">
                  <Stack direction="row" align="center" spacing="1">
                    <FaInstagram />
                    <Text>Instagram</Text>
                  </Stack>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511950488229">
                  <Stack direction="row" align="center" spacing="1">
                    <FaWhatsapp />
                    <Text>Whatsapp</Text>
                  </Stack>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;