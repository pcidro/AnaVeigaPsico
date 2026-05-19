import type { ReactNode } from "react";

export type AreaAtendimento = {
  slug: string;
  nome: string;
  descricao: string;
  texto: ReactNode;
  sinais: string[];
  imagem: string;
};

export const areasAtendimento: AreaAtendimento[] = [
  {
    slug: "terapia-para-maes",
    nome: "Terapia para Mães",
    descricao:
      "Um espaço para mães que desejam falar sobre exaustão, culpa, amor, limites e identidade sem precisar sustentar uma imagem perfeita.",
    texto: (
      <>
        <p>
          Na terapia para mães, acolho as camadas emocionais que aparecem quando
          a maternidade atravessa a vida real: o cansaço, a ambivalência, a
          culpa e a sensação de não dar conta de tudo.
        </p>
        <p>
          O processo acontece com uma escuta sensível, sem julgamentos, para que
          você possa <strong>reconhecer suas necessidades</strong>, elaborar
          dores silenciosas e construir uma relação mais possível com a
          maternidade e consigo mesma.
        </p>
      </>
    ),
    sinais: [
      "Você sente que precisa dar conta de tudo, mas está emocionalmente esgotada.",
      "Você sente que perdeu partes importantes de si depois da maternidade.",
      "Você sente culpa quando deseja descanso, silêncio ou tempo para você.",
      "Você sente dificuldade em pedir ajuda ou colocar limites.",
    ],
    imagem: "/img/areas/terapia-para-maes.png",
  },
  {
    slug: "luto-gestacional",
    nome: "Luto Gestacional",
    descricao:
      "Acolhimento para mulheres que viveram perdas gestacionais e precisam de um lugar seguro para elaborar essa dor.",
    texto: (
      <>
        <p>
          O luto gestacional costuma ser uma dor profunda e, muitas vezes, pouco
          reconhecida pelas pessoas ao redor. Ofereço um espaço de escuta para
          que essa perda possa ter nome, tempo e cuidado.
        </p>
        <p>
          Aqui, não há pressa para superar. Há presença para sustentar o que
          ficou interrompido, acolher o amor que existiu e ajudar você a
          atravessar esse momento com{" "}
          <strong>dignidade, delicadeza e amparo emocional</strong>.
        </p>
      </>
    ),
    sinais: [
      "Você sente que sua dor foi minimizada ou apressada por outras pessoas.",
      "Você sente dificuldade em falar sobre a perda sem se sentir sozinha.",
      "Você sente culpa, vazio, raiva ou confusão depois da perda gestacional.",
      "Você sente medo de tentar novamente ou de se conectar com novos planos.",
    ],
    imagem: "/img/areas/luto-gestacional.png",
  },
  {
    slug: "pre-natal-psicologico",
    nome: "Pré-natal Psicológico",
    descricao:
      "Cuidado emocional durante a gravidez para preparar a chegada do bebê e acolher as transformações da gestante.",
    texto: (
      <>
        <p>
          O pré-natal psicológico acompanha a gestante nas mudanças emocionais,
          familiares e simbólicas que surgem antes da chegada do bebê. É um
          cuidado complementar ao pré-natal médico, voltado para a saúde
          emocional.
        </p>
        <p>
          Comigo, esse processo abre espaço para falar de medos, expectativas,
          vínculos, rede de apoio e história pessoal, fortalecendo uma
          preparação mais consciente para o parto, o puerpério e a nova rotina.
          É um caminho para chegar à maternidade com{" "}
          <strong>mais presença e menos solidão</strong>.
        </p>
      </>
    ),
    sinais: [
      "Você sente medo do parto, do puerpério ou das mudanças que estão chegando.",
      "Você sente ansiedade ao pensar na responsabilidade de cuidar de um bebê.",
      "Você sente que precisa organizar sua rede de apoio e seus limites.",
      "Você sente vontade de se preparar emocionalmente para essa nova fase.",
    ],
    imagem: "/img/areas/pre-natal-psicologico.png",
  },
  {
    slug: "terapia-na-gestacao",
    nome: "Terapia na Gestação",
    descricao:
      "Escuta clínica para gestantes que querem atravessar esse período com mais acolhimento, clareza e cuidado emocional.",
    texto: (
      <>
        <p>
          A gestação pode trazer alegria, mas também inseguranças, lembranças,
          conflitos e sentimentos contraditórios. Na terapia, acolho essa
          experiência sem idealizações, respeitando o ritmo de cada mulher.
        </p>
        <p>
          O trabalho ajuda a compreender o que se movimenta emocionalmente nesse
          período, fortalecer recursos internos e construir um espaço onde você
          possa falar sobre o que nem sempre cabe nas conversas do dia a dia. A
          gestação também pode ser vivida com{" "}
          <strong>escuta, verdade e suporte</strong>.
        </p>
      </>
    ),
    sinais: [
      "Você sente ansiedade, irritação ou medo com mais frequência durante a gestação.",
      "Você sente que precisa parecer feliz o tempo todo, mesmo quando não está.",
      "Você sente conflitos com o corpo, com a família ou com as expectativas externas.",
      "Você sente necessidade de um espaço só seu para falar com liberdade.",
    ],
    imagem: "/img/areas/terapia-na-gestacao.png",
  },
  {
    slug: "tentantes-e-infertilidade",
    nome: "Tentantes e Infertilidade",
    descricao:
      "Apoio emocional para mulheres e casais que enfrentam a espera, os tratamentos, as frustrações e a pressão para engravidar.",
    texto: (
      <>
        <p>
          A jornada de tentantes e infertilidade pode ser atravessada por
          esperança, frustração, cobranças, exames e uma espera que mexe com o
          corpo e com a identidade. Ofereço um espaço para cuidar do impacto
          emocional desse caminho.
        </p>
        <p>
          A terapia ajuda a nomear angústias, elaborar perdas, sustentar
          decisões e reencontrar algum chão diante de ciclos que podem ser muito
          desgastantes. O objetivo é que você não precise viver esse processo em
          silêncio, mas com{" "}
          <strong>acolhimento, escuta e companhia clínica</strong>.
        </p>
      </>
    ),
    sinais: [
      "Você sente que sua vida ficou suspensa em torno da tentativa de engravidar.",
      "Você sente tristeza ou raiva ao receber notícias de gravidez de outras pessoas.",
      "Você sente pressão da família, do parceiro, dos exames ou dos tratamentos.",
      "Você sente que precisa de apoio para atravessar a espera e as incertezas.",
    ],
    imagem: "/img/areas/tentantes-e-infertilidade.png",
  },
  {
    slug: "ansiedade-feminina",
    nome: "Ansiedade Feminina",
    descricao:
      "Escuta para mulheres que vivem ansiedade, autocobrança, sobrecarga emocional e a sensação constante de precisar dar conta de tudo.",
    texto: (
      <>
        <p>
          A ansiedade feminina pode aparecer no corpo, nos pensamentos
          acelerados, na dificuldade de descansar e na cobrança silenciosa por
          desempenho, cuidado e controle. Acolho essa experiência considerando a
          história, os vínculos e os papéis que atravessam a vida de cada
          mulher.
        </p>
        <p>
          Na terapia, o trabalho busca dar nome ao que angustia, compreender
          gatilhos e construir formas mais cuidadosas de se relacionar com as
          próprias emoções. Não se trata de apagar o que você sente, mas de
          encontrar <strong>mais respiro e segurança interna</strong> para
          atravessar o cotidiano.
        </p>
      </>
    ),
    sinais: [
      "Você sente que sua mente não desacelera, mesmo quando o corpo está cansado.",
      "Você sente aperto no peito, tensão, irritação ou medo sem entender exatamente por quê.",
      "Você sente que precisa agradar, controlar ou antecipar tudo para se sentir segura.",
      "Você sente dificuldade em descansar sem culpa ou em respeitar seus próprios limites.",
    ],
    imagem: "/img/areas/ansiedade-feminina-v2.png",
  },
];

export function getAreaBySlug(slug: string) {
  return areasAtendimento.find((area) => area.slug === slug);
}
