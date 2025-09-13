import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import BannerHero from "@/components/BannerHero/BannerHero";
import BannerSection from "@/components/BannerSection/BannerSection";

import Logo from "../images/logo.png";
import DirtBackground from "../images/dirt_background.png";
import WaterBackground from "../images/water_background.png";
import GrassShadowBackground from "../images/grass_shadow_background.png";
import ImageBase from "../images/image_base.png";

import ImaIcon from "../images/ima_icon.png";
import ChestIcon from "../images/chest_icon.png";

export default function Home() {
  return (
    <div className="page">
      <BannerHero
        title="Monte seu inventário do Minecraft na vida real"
        subtitle="Agora você pode montar, organizar e brincar com o inventário do Minecraft na sua própria geladeira, quadro ou qualquer superfície metálica."
        background={GrassShadowBackground.src}
        image={Logo.src}
        buttonText="Quero meu inventário agora"
      />
      <BannerSection
        title="Conjunto de Ímãs de Geladeira"
        subtitle="Combine blocos e organize receitas. Tudo como no jogo, mas agora na vida real."
        image={ImageBase.src}
        imageText={ImaIcon.src}
        imagePosition="left"
      />
      <Banner
        title={"A imaginação não tem limites"}
        subtitle={
          "Não é apenas decoração, é uma forma divertida de brincar, imaginar e transformar qualquer espaço em um pedacinho do universo Minecraft."
        }
        background={DirtBackground.src}
        buttonText={"COMPRAR AGORA"}
        textPosition={"left"}
      />
      <BannerSection
        title="O que vem na caixa?"
        subtitle="
        <p><b>1x</b> Inventário do Minecraft</p>
        <br />
        <p><b>50x</b> peças de items</p>
        <br />
        <p>Impressão em <b>alta resolução</b></p>
        <br />
        <p>Fixam em qualquer <b>superfície metálica</b></p>
        "
        image={ImageBase.src}
        imageText={ChestIcon.src}
        imagePosition="right"
      />
      <Banner
        title={"O Presente Ideal para Fãs de Minecraft"}
        subtitle={
          "Seja para aniversário, datas especiais ou simplesmente para surpreender, é um presente único que vai deixar qualquer fã com um sorriso no rosto."
        }
        background={WaterBackground.src}
        buttonText={"GARANTIR O MEU AGORA"}
        textPosition={"right"}
      />
    </div>
  );
}
