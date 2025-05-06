import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kushroom",
  lastName: "OG",
  get name() {
    return `${this.firstName}`;
  },
  role: "",
  avatar: "/images/avatar.jpg",
  email: "kushroomog@gmail.com",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Inscreva-se em nosso Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/kushroomog",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@SMITH-I",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${"kushroomog@gmail.com"}`,
  },
];

const home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Início",
  title: `${person.name} – Label & Lifestyle`,
  description: `Kushroom: label independente que une música e moda`,
  headline: <>Estilo de vida, música e arte se encontram</>,
  featured: {
    display: true,
    title: (
      <>
        Projeto em destaque:{" "}
        <strong className="ml-4">EP NEW WAVE THE SURF</strong>
      </>
    ),
    href: "/blog/new-wave",
  },
  subline: (
    <>
      Bem-vindo à Kushroom, onde criamos roupas exclusivas
      <br /> e lançamos sons que ditam tendências.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre a ${person.name}`,
  description: `Conheça a Kushroom, label e marca de lifestyle`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kushroom",
  },
  intro: {
    display: true,
    title: "Sobre a Kushroom",
    description: (
      <>
        A Kushroom é uma gravadora independente sediada em Pirituba - São Paulo,
        especializada em produção musical e moda urbana.
        <br /> Nosso propósito é conectar arte, estilo de vida e cultura.
        <br /> Agende uma sessão conosco!
      </>
    ),
  },
  work: {
    display: false,
    title: "Artistas",
    experiences: [
      {
        company: "SMITH-I",
        timeframe: "2024 – Presente",
        role: "MC / Rapper",
        achievements: [
          <>
            2018: integrou o Coletivo Cabelo Crespo ao lado de Gum Beats,
            iniciando agenda intensa de shows e parcerias locais.
          </>,
          <>
            2019–2021: cofundador do selo INSP MUSIC, elevando qualidade
            artística e visibilidade de novos talentos.
          </>,
          <>
            2021: fundou a gravadora Favela No Auge, consolidando-se como voz
            forte do underground.
          </>,
          <>
            2024: uniu-se à Kushroom e ao produtor Marqueta, mesclando Trap,
            RAP, Amapiano e outras vertentes.
          </>,
        ],
        instagram: "oficialsmithi",
        image: "/images/kush/smith.png",
      },
      {
        company: "Marqueta",
        timeframe: "2024 — Presente",
        role: "Beatmaker / Produtor Musical",
        achievements: [
          <>
            Produções envolventes transitando pelo trap, incorporando elementos
            de Afrobeat, funk, dub e música eletrônica.
          </>,
          <>
            Melodias ricas construídas com instrumentos e sintetizadores,
            criando atmosferas imersivas.
          </>,
          <>
            Cada faixa transporta o ouvinte a novas paisagens sonoras,
            evidenciando versatilidade e identidade artística.
          </>,
        ],
        instagram: "marquetaksh",
        image: "/images/kush/marqueta.jpg",
      },
      {
        company: "Chico Dias",
        timeframe: "2024 – Presente",
        role: "Instrumentista / Produtor",
        achievements: [
          <>Atua como guitarrista na cena independente de SP desde 2009.</>,
          <>2015: membro da banda À Margem (metal/rap).</>,
          <>2019: arranjista no INSP Music / Coletivo Cabelo Crespo.</>,
          <>2020: participou do Beco do Magrão em Poá/SP.</>,
          <>Influências: MPB, Jazz, música latina.</>,
        ],
        instagram: "frdmiranda",
        image: "/images/kush/chico.jpg",
      },
    ],
  },
  studies: {
    display: false,
    title: "Estudos",
    institutions: [], // empty so TS sees the key
  },
  technical: {
    display: false,
    title: "Serviços",
    skills: [], // empty as well
  },
};

const blog = {
  path: "/blog",
  label: "Editorial",
  title: "Editorial",
  description: `Fique por dentro dos lançamentos e projetos da Kushroom`,
};

const work = {
  path: "/artistas",
  label: "Artistas",
  title: `Nossos talentos – ${person.name}`,
  description: `Conheça os talentos da Kushroom`,
};

const horizontalImages = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/gallery/horizontal-${i + 1}.jpg`,
  alt: `Kushroom Sessions ${i + 1}`,
  orientation: "horizontal",
}));

const verticalImages = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/gallery/vertical-${i + 1}.jpg`,
  alt: `Editorial Kushroom ${i + 1}`,
  orientation: "vertical",
}));

const gallery = {
  path: "/galleria",
  label: "Galeria",
  title: `Galeria – ${person.name}`,
  description: `Campanhas de moda e clipes da Kushroom`,
  images: (() => {
    const result = [];
    const pairs = Math.min(
      Math.floor(horizontalImages.length / 2),
      Math.floor(verticalImages.length / 2),
    );
    for (let i = 0; i < pairs; i++) {
      result.push(
        horizontalImages[2 * i],
        verticalImages[2 * i],
        verticalImages[2 * i + 1],
        horizontalImages[2 * i + 1],
      );
    }
    // append any leftovers
    return [
      ...result,
      ...horizontalImages.slice(pairs * 2),
      ...verticalImages.slice(pairs * 2),
    ];
  })(),
};
export { person, social, newsletter, home, about, blog, work, gallery };
