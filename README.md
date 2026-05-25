# Ana Veiga Psicanalista

**Deploy:**  
https://anaveigapsicanalista.com.br

## Sobre o Projeto

O projeto **Ana Veiga Psicanalista** é um site institucional desenvolvido para uma cliente real, com foco em presença digital, divulgação dos serviços da profissional e captação de novos pacientes.

A aplicação inclui blog integrado, CMS para gerenciamento de conteúdo, SEO otimizado e deploy em produção com domínio próprio.

## Visão Geral

O projeto combina um site institucional com um CMS para gerenciamento de conteúdo.

- Site institucional para apresentação profissional e captação de pacientes.
- Blog com artigos gerenciados via CMS.
- SEO otimizado para mecanismos de busca.
- Layout responsivo para diferentes dispositivos.

## Principais Funcionalidades

- CMS para gerenciamento de conteúdo.
- Blog dinâmico com artigos e páginas geradas por slug.
- Integração com avaliações do Google.
- Compartilhamento de conteúdo via WhatsApp.
- SEO completo (metadata, Open Graph, sitemap e robots).
- Interface responsiva para desktop, tablet e mobile.
- Otimização de performance e imagens.
- Deploy em produção com domínio próprio.

## Tecnologias Utilizadas

| Next.js
| React
| TypeScript
| CSS Modules
| Cosmic CMS

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

### Server Components e Server Actions

A aplicação utiliza recursos do Next.js para buscar dados no servidor e entregar páginas já preparadas para renderização. A home e as páginas de blog trabalham com dados vindos do CMS, enquanto os depoimentos são consumidos por uma Server Action em `serverActions/depoimentos.ts`.

Essa Server Action consulta a API do Google Places para buscar avaliações, nota, quantidade de avaliações e link do local no Google Maps.

### Organização do Código

O código foi separado por responsabilidade:

- `app` concentra rotas, layout global e recursos de SEO.
- `sections` organiza os blocos visuais da home.
- `components` armazena elementos reutilizáveis de layout.
- `actions` centraliza a comunicação com o CMS.
- `serverActions` isola a integração com o Google.
- `types` mantém a tipagem dos dados utilizados pela aplicação.
- `public` armazena imagens, logos e assets estáticos.

## SEO Implementado

O projeto recebeu uma camada de SEO pensada para melhorar indexação, compartilhamento e clareza das páginas para mecanismos de busca.

- Metadata global configurada no layout principal.
- Títulos com template para manter consistência entre páginas.
- Descrições específicas para o site e para páginas dinâmicas.
- Metadata dinâmica em `/blog/[slug]` com dados do artigo.
- Metadata dinâmica em `/areas/[slug]` com dados da área de atendimento.
- Open Graph para compartilhamento em redes sociais e aplicativos de mensagem.
- Robots configurado permitindo indexação e apontando para o sitemap.
- Imagens otimizadas e textos alternativos em pontos importantes da interface.

## Desafios do Projeto

Durante o desenvolvimento, alguns desafios tiveram papel importante na construção da solução:

- **Integração com o CMS:** permitir que a cliente gerenciasse conteúdos com autonomia, sem comprometer a consistência visual e técnica do site.

- **Estrutura do blog:** criar uma solução flexível para publicação de novos artigos, imagens e informações editoriais, mantendo uma experiência consistente para os usuários.

- **Integração com a API do Google:** consumir avaliações externas, tratar possíveis falhas de comunicação e normalizar os dados recebidos.

- **Experiência do usuário:** desenvolver uma interface acolhedora, profissional e intuitiva, transmitindo confiança aos visitantes e facilitando o contato.

## Aprendizados

Além do desenvolvimento técnico, este projeto proporcionou experiência prática na construção de uma aplicação utilizada por uma cliente real.

Principais aprendizados:

- Desenvolvimento de aplicações com Next.js e TypeScript.
- Implementação de SEO para melhorar visibilidade orgânica.
- Integração de CMS para gerenciamento de conteúdo.
- Consumo de APIs e dados externos.
- Construção de interfaces responsivas e acessíveis.
- Deploy e manutenção de aplicações em produção.
- Comunicação com cliente, levantamento de requisitos e realização de ajustes durante o projeto.

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

## Considerações Finais

O site **Ana Veiga Psicanalista** representa uma aplicação real de mercado, construída para atender uma cliente com necessidades concretas de presença digital, gestão de conteúdo e comunicação profissional.

Demonstrando não apenas a implementação técnica, mas também a capacidade de transformar requisitos de uma cliente real em uma solução funcional, bem estruturada, publicável e preparada para uso contínuo.
