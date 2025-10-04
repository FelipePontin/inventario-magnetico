import BannerHero from "@/components/BannerHero/BannerHero";
import BannerSection from "@/components/BannerSection/BannerSection";
import Banner from "@/components/Banner/Banner";
import CardReview from "@/components/CardReview/CardReview";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";

import Logo from "../images/logo.png";
import ClashRoyaleBackground from "../images/background_mini.png";
import ImageBase from "../images/image_base.png";
import ImaIcon from "../images/ima_icon.png";
import ClashRoyaleTroops from "../images/background_troops_clash_royale.jpg";
import ClashRoyaleChest from "../images/clash_royale_chest.png";
import BackgroundPekka from "../images/background_pekka.jpg";
import HeartIcon from "../images/heart_icon_clash_royale.png";
import FaqBackground from "../images/background_arena_clash_royale_small.png";
import RoyalGiantBackground from "../images/royal_giant_background.png";
import BackgroundPurple from "../images/background_purple.jpg";
import MisteryBox from "../images/MysteryBox.png";

import DeckMao from "../images/product/imagem_cartas_na_mao.png";
import DeckGeladeira from "../images/product/imagem_carta_no_deck.png";

const ClashRoyale = () => {
  return (
    <div className="page">
      <BannerHero
        title="Monte seu deck do Clash Royale na vida real"
        subtitle="Agora você pode criar, organizar e brincar com seu deck do Clash Royale na sua geladeira, quadro ou qualquer superfície metálica."
        background={ClashRoyaleBackground.src}
        image={Logo.src}
        alt={
          "Imagem Background Ilustração Mini Pekka Clash Royale Inventario Magnetico"
        }
        aria-label="Imagem Background Ilustração Mini Pekka Clash Royale Inventario Magnetico"
        buttonText="Quero meu deck agora"
        buttonLink="https://inventariomagnetico.shop/produtos/ima-de-geladeira-clash-royale-deck-e-cartas-personalizadas"
      />
      <BannerSection
        title="Conjunto de Ímãs do Clash Royale"
        subtitle="Monte seu deck, organize estratégias e leve a diversão da arena para a vida real."
        image={DeckMao.src}
        imageText={ImaIcon.src}
        alt={
          "Imagem produto em mãos Inventario Magnetico com cartas do Clash Royale"
        }
        aria-label="Imagem produto em mãos Inventario Magnetico com cartas do Clash Royale"
        altIcon={"Imã Icone Clash Royale Inventario Magnetico"}
        imagePosition="left"
      />
      <Banner
        title={"A arena agora é na sua casa"}
        subtitle={
          "Não é apenas decoração, é uma forma divertida de brincar, imaginar e transformar qualquer espaço em um pedacinho do universo Clash Royale."
        }
        background={ClashRoyaleTroops.src}
        alt={"Imagem ilustração tropas Clash Royale Inventario Magnetico"}
        buttonText={"COMPRAR AGORA"}
        aria-label="Imagem ilustração tropas Clash Royale Inventario Magnetico"
        buttonLink="https://inventariomagnetico.shop/produtos/ima-de-geladeira-clash-royale-deck-e-cartas-personalizadas"
        textPosition={"left"}
      />
      <BannerSection
        title="O que vem na caixa?"
        subtitle="
        <p><b>1x</b> Deck base do Clash Royale (deck magnético)</p>
        <br />
        <p><b>25</b> cartas do Clash Royale</p>
        <br />
        <p>Impressão em <b>alta resolução</b></p>
        <br />
        <p>Fixam em qualquer <b>superfície metálica</b></p>
        "
        image={DeckGeladeira.src}
        imageText={ClashRoyaleChest.src}
        alt={
          "Imagem produto em mãos Inventario Magnetico com cartas do Clash Royale"
        }
        aria-label="Imagem produto em mãos Inventario Magnetico com cartas do Clash Royale"
        altIcon={"Báu Icone Clash Royale Inventario Magnetico"}
        imagePosition="right"
      />
      <Banner
        title={"O Presente Ideal para Fãs de Clash Royale"}
        subtitle={
          "Seja para aniversário, datas especiais ou simplesmente para surpreender, é um presente épico que vai deixar qualquer fã da arena com um sorriso no rosto."
        }
        background={BackgroundPekka.src}
        alt="Imagem background Pekka ilustrativo Clash Royale Inventario Magnetico"
        buttonText={"GARANTIR O MEU AGORA"}
        aria-label="Imagem background Pekka ilustrativo Clash Royale Inventario Magnetico"
        buttonLink="https://inventariomagnetico.shop/produtos/ima-de-geladeira-clash-royale-deck-e-cartas-personalizadas"
        textPosition={"right"}
      />
      <CardReview
        title={"QUEM COMPROU, AMOU"}
        subtitle={
          "Centenas de fãs de Clash Royale já levaram a arena para dentro de casa. A cada compra, mais diversão, mais estratégia e mais batalhas épicas fora da tela."
        }
        imageIcon={HeartIcon.src}
      />
      <Faq
        title={"PERGUNTAS FREQUENTES"}
        image={MisteryBox.src}
        alt="Imagem báu misterioso Clash Royale Inventario Magnetico"
        aria-label="Imagem báu misterioso Clash Royale Inventario Magnetico"
        background={FaqBackground.src}
      />
      <BannerSection
        title="Nos acompanhe nas redes sociais"
        subtitle="Fique por dentro das novidades, lançamentos e promoções exclusivas."
        image={Logo.src}
        imagePosition="right"
        alt={"Imagem logo Inventario Magnetico Clash Royale"}
        aria-label="Imagem logo Inventario Magnetico Clash Royale"
        socialMedia={true}
      />
      <Footer
        text={"© 2025 Inventário Magnético. Todos os direitos reservados."}
        aria-label="© 2025 Inventário Magnético. Todos os direitos reservados."
        background={RoyalGiantBackground.src}
      />
    </div>
  );
};

export default ClashRoyale;
