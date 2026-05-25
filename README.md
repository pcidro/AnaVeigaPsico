# Ana Veiga Psicanalista

**Deploy:**  
https://anaveigapsicanalista.com.br

## Sobre o Projeto

O projeto **Ana Veiga Psicanalista** é um site institucional desenvolvido para uma cliente real, com o objetivo de apresentar o trabalho da profissional, fortalecer sua presença digital e facilitar o acesso de potenciais pacientes às informações sobre atendimento, áreas de atuação, conteúdos educativos e canais de contato.

Mais do que uma página de apresentação, o site foi pensado como uma solução completa para comunicação profissional. Ele resolve uma necessidade comum em negócios de atendimento especializado: transmitir confiança, organizar informações sensíveis de forma clara e permitir que a própria cliente mantenha parte do conteúdo atualizado por meio de um CMS.

Por ter sido desenvolvido para uma demanda real, o projeto envolveu decisões práticas de produto, comunicação, experiência do usuário, SEO, responsividade, integração com serviços externos e deploy em produção.

## Visão Geral

O sistema é composto por áreas públicas voltadas aos visitantes do site e por uma camada de gerenciamento de conteúdo conectada ao CMS.

- **Site institucional:** apresenta a profissional, sua abordagem, áreas de atendimento, perguntas frequentes, mídia, depoimentos e chamadas para contato.
- **Blog:** exibe artigos dinâmicos publicados via CMS, com página individual para cada conteúdo.
- **CMS administrativo:** permite o cadastro e a edição de conteúdos do blog sem necessidade de alteração direta no código.
- **Gestão de conteúdo:** centraliza posts, imagens, resumo, categoria, autoria, data de publicação e tempo de leitura.
- **SEO:** utiliza metadata, URLs amigáveis, sitemap, robots e dados otimizados para compartilhamento.
- **Responsividade:** entrega uma experiência adaptada para desktop, tablet e mobile.

## Funcionalidades

- Página inicial institucional organizada em seções.
- Hero com apresentação direta da profissional e chamada para contato.
- Seção de áreas de atendimento.
- Páginas dinâmicas para áreas de atendimento com rota baseada em `slug`.
- Seção "Sobre mim" com conteúdo institucional e imagens.
- Seção de blog integrada ao CMS.
- Listagem dinâmica de posts do blog.
- Página individual de artigo com rota `/blog/[slug]`.
- Conteúdo de artigo renderizado dinamicamente a partir do CMS.
- Imagem de capa, categoria, autor, data de publicação e tempo de leitura para posts.
- Posts relacionados na página individual de artigo.
- Compartilhamento de artigos via WhatsApp.
- Depoimentos integrados ao Google.
- Link de direcionamento para o perfil da profissional no Google Maps.
- Seção de mídia com logos e referências externas.
- FAQ com perguntas frequentes.
- Chamadas para contato via WhatsApp.
- CMS para gerenciamento de posts.
- Busca de conteúdos com revalidação para manter o site performático e atualizado.
- Metadata global do site.
- Metadata dinâmica para artigos do blog.
- Metadata dinâmica para áreas de atendimento.
- Open Graph para melhor apresentação em compartilhamentos.
- Twitter Cards.
- URLs amigáveis.
- Sitemap dinâmico com inclusão de áreas e posts.
- Arquivo `robots.txt` configurado.
- Layout responsivo para diferentes tamanhos de tela.
- Uso de imagens otimizadas com `next/image`.
- Deploy em produção com domínio oficial.

## Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| Next.js | Framework principal, App Router, rotas dinâmicas, Server Components, metadata, sitemap e robots. |
| React | Construção das interfaces, componentes reutilizáveis e composição das seções do site. |
| TypeScript | Tipagem de dados vindos do CMS, posts, áreas de atendimento e integração com Google. |
| CSS Modules | Estilização modular por componente e por página, mantendo escopo e organização visual. |
| Cosmic CMS | Gerenciamento dos posts do blog e conteúdos dinâmicos consumidos pela aplicação. |

## Arquitetura do Projeto

A aplicação foi organizada seguindo a estrutura do **App Router** do Next.js, separando páginas, seções, componentes, ações de servidor, tipos e assets públicos.

```text
src/
  actions/
    getdata.ts
    getPostBySlug.ts
  app/
    page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
    blog/[slug]/page.tsx
    areas/[slug]/page.tsx
  components/
    layout/
  sections/
    hero/
    howicanhelp/
    areasatendimento/
    sobremim/
    depoimentos/
    namidia/
    blog/
    faq/
    footer/
  types/
serverActions/
  depoimentos.ts
public/
  img/
```

### Rotas

O projeto utiliza rotas estáticas e dinâmicas:

- `/` - página inicial institucional.
- `/blog/[slug]` - página individual de artigo, gerada a partir do slug do post cadastrado no CMS.
- `/areas/[slug]` - página individual de área de atendimento, gerada a partir dos dados estruturados do projeto.

As páginas dinâmicas permitem que cada conteúdo tenha sua própria URL, seu próprio contexto de SEO e uma experiência mais específica para o usuário.

### CMS

O blog é alimentado pelo Cosmic CMS. Os posts são buscados por meio de funções dedicadas em `src/actions`, usando variáveis de ambiente para conectar a aplicação ao serviço.

Cada artigo pode conter informações como:

- título;
- slug;
- resumo;
- conteúdo;
- imagem de capa;
- categoria;
- autor;
- data de publicação;
- tempo de leitura.

Essa estrutura permite que a cliente publique e edite conteúdos sem depender de alterações no código, o que torna o projeto mais sustentável no uso real.

### Server Components e Server Actions

A aplicação utiliza recursos do Next.js para buscar dados no servidor e entregar páginas já preparadas para renderização. A home e as páginas de blog trabalham com dados vindos do CMS, enquanto os depoimentos são consumidos por uma Server Action em `serverActions/depoimentos.ts`.

Essa Server Action consulta a API do Google Places para buscar avaliações, nota, quantidade de avaliações e link do local no Google Maps. Também há tratamento de erro para preservar a experiência do usuário caso a API externa não responda corretamente.

### Organização do Código

O código foi separado por responsabilidade:

- `app` concentra rotas, layout global e recursos de SEO.
- `sections` organiza os blocos visuais da home.
- `components` armazena elementos reutilizáveis de layout.
- `actions` centraliza a comunicação com o CMS.
- `serverActions` isola a integração com o Google.
- `types` mantém a tipagem dos dados utilizados pela aplicação.
- `public` armazena imagens, logos e assets estáticos.

Essa organização facilita manutenção, leitura do projeto e evolução futura.

## SEO Implementado

O projeto recebeu uma camada de SEO pensada para melhorar indexação, compartilhamento e clareza das páginas para mecanismos de busca.

- Metadata global configurada no layout principal.
- Títulos com template para manter consistência entre páginas.
- Descrições específicas para o site e para páginas dinâmicas.
- Metadata dinâmica em `/blog/[slug]` com dados do artigo.
- Metadata dinâmica em `/areas/[slug]` com dados da área de atendimento.
- Open Graph para compartilhamento em redes sociais e aplicativos de mensagem.
- Twitter Cards com imagem e descrição.
- URLs amigáveis baseadas em `slug`.
- Canonical URLs nas páginas principais e dinâmicas.
- Sitemap gerado dinamicamente com home, áreas de atendimento e posts do blog.
- Robots configurado permitindo indexação e apontando para o sitemap.
- Imagens otimizadas e textos alternativos em pontos importantes da interface.

## Responsividade

O layout foi desenvolvido para funcionar bem em diferentes dispositivos, respeitando a leitura, o toque e o contexto de uso de cada tela.

- **Desktop:** maior aproveitamento de imagens, grids, espaçamentos amplos e hierarquia visual mais aberta.
- **Tablet:** adaptação das seções para manter boa leitura sem perda de composição.
- **Mobile:** reorganização dos blocos, foco em leitura vertical, botões acessíveis ao toque e conteúdo apresentado de forma direta.

A responsividade foi essencial para o projeto, já que muitos acessos a sites institucionais de profissionais autônomos acontecem pelo celular, especialmente a partir de buscas no Google, redes sociais ou links compartilhados.

## Desafios do Projeto

Um dos principais desafios foi integrar o CMS de forma que o conteúdo pudesse ser gerenciado pela cliente com autonomia, mas sem comprometer a qualidade visual e técnica do site. O blog precisava ser flexível para receber novos artigos, imagens e informações editoriais, mantendo uma apresentação consistente no front-end.

Outro ponto importante foi a integração com o Google para exibição dos depoimentos. Além de consumir dados externos, foi necessário tratar cenários de erro, normalizar as informações retornadas pela API e manter a seção útil mesmo quando a resposta do serviço não estivesse disponível.

Também houve um desafio relevante de UI: o site precisava ser bonito, acolhedor e profissional, mas ao mesmo tempo simples de entender. Para os visitantes, a navegação deveria transmitir confiança e facilitar o contato. Para a psicóloga, o gerenciamento de conteúdo deveria ser prático o suficiente para publicar no CMS sem depender de conhecimento técnico.

Esse equilíbrio entre estética, clareza, autonomia de conteúdo e confiabilidade técnica foi uma das partes mais importantes do desenvolvimento.

## Aprendizados

Este projeto consolidou aprendizados técnicos e profissionais importantes:

- Uso do App Router do Next.js em um projeto real.
- Criação de rotas dinâmicas com `[slug]`.
- Geração de metadata dinâmica para páginas de blog e áreas de atendimento.
- Estruturação de sitemap e robots no Next.js.
- Integração com CMS para conteúdo editável.
- Consumo de dados externos vindos da API do Google.
- Uso de Server Components e Server Actions.
- Organização de componentes e seções em uma aplicação institucional.
- Desenvolvimento responsivo com foco em experiência real de navegação.
- Deploy em produção utilizando Vercel.
- Configuração de domínio próprio em um projeto publicado.
- Levantamento de requisitos com cliente real.
- Tradução de necessidades de negócio em decisões de interface e conteúdo.
- Comunicação com cliente durante desenvolvimento, ajustes e entrega.

## Como Executar Localmente

Clone o repositório:

```bash
git clone https://github.com/pcidro/AnaVeigaPsico.git
```

Acesse a pasta do projeto:

```bash
cd AnaVeigaPsico
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias para o CMS e para a integração com o Google:

```bash
NEXT_PUBLIC_API_URL=
READ_KEY=
NEXT_PUBLIC_SITE_URL=
GOOGLE_PLACE_ID=
GOOGLE_MAPS_API_KEY=
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

## Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão de produção da aplicação. |
| `npm run start` | Executa a aplicação em modo de produção após o build. |
| `npm run lint` | Executa a verificação de lint do projeto. |

## Considerações Finais

O site **Ana Veiga Psicanalista** representa uma aplicação real de mercado, construída para atender uma cliente com necessidades concretas de presença digital, gestão de conteúdo e comunicação profissional.

O projeto reúne desenvolvimento front-end com Next.js, React e TypeScript, integração com CMS, blog dinâmico, SEO, responsividade, consumo de API externa, deploy em produção e domínio próprio.

Como case de portfólio, ele demonstra não apenas a implementação técnica, mas também a capacidade de transformar requisitos de uma cliente real em uma solução funcional, bem estruturada, publicável e preparada para uso contínuo.
