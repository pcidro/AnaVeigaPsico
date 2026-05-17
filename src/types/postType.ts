interface Imagem {
  url: string;
}

export interface Post {
  slug: string;
  title: string;
  metadata: {
    resumo: string;
    imagem_de_capa: Imagem;
    conteudo: string;
    data_da_publicacao: string;
  };
}

export interface PostsResponse {
  objects: Post[];
}
