# Controle Quebrado

Portal dos canais [Controle Quebrado](https://www.youtube.com/@controlequebrado_tv) e [Caio Mendonça](https://www.youtube.com/@caiomendonca8509/videos), publicado no GitHub Pages em https://mozaiam.github.io/. Reúne notícias, rumores identificados, descobertas da comunidade, guias e tutoriais sobre games, PC, Linux e tecnologia.

Não há build nem dependências: basta editar os arquivos e enviar para o repositório.

## Estrutura

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página inicial: destaque, vídeos, notícias, guias e apoio |
| `noticias.html` | Arquivo com todas as notícias e busca |
| `noticia-*.html` | Notícias de Linux, games, GTA VI, vazamentos e descobertas |
| `underground-2-revived.html` | Matéria sobre Need for Speed Underground 2 Revived |
| `recomp-*.html` | Notícias de recompilações e ports |
| `bios.html`, `pcsx2-linux-mint.html`, `texturas-hd-pcsx2.html`, `comandos.html`, `quiz-driver.html` | Guias e ferramentas |
| `indicados.html` | Produtos indicados (links de afiliado) |
| `sobre.html`, `contato.html`, `apoie.html`, `privacidade.html`, `404.html` | Páginas institucionais |
| `tema.css`, `site.css`, `site.js` | Estilo e script compartilhados |
| `fontes/` | Fontes Bebas Neue e Barlow (com licenças) |
| `sitemap.xml`, `robots.txt`, `feed.xml` | Busca e feed RSS |
| `noticia-*.jpg`, `rec-*.jpg`, `emu-*.jpg`, `lin-*.jpg`, `dl-*.jpg` | Imagens, por prefixo |

## Como publicar uma notícia nova

1. Copie uma página `noticia-*.html` parecida e troque título, texto, data, imagem e fonte.
2. Atualize o `<title>`, a descrição, o `og:image` e o bloco `application/ld+json` (título, data e imagem) da página nova.
3. Acrescente o card em `index.html` (seção Novidades), o item em `noticias.html` e o `<item>` em `feed.xml`.
4. Inclua a página em `sitemap.xml`.

## Destaque da página inicial

Em `index.html`, procure o comentário `DESTAQUE` e troque imagem, manchete, resumo e links. Quando a notícia em destaque também estiver em Novidades, ela aparece duas vezes, o que é intencional.

## Links de afiliado

- Ficam em `indicados.html`, em boxes dentro de `pcsx2-linux-mint.html` e `recomp-banjo-recompiled.html`, e na página inicial (coluna lateral em telas largas, seção "Indicado do canal" nas demais).
- Todos usam `rel="sponsored noopener noreferrer"` e vêm com aviso de afiliado. Não coloque `utm_` nos links.

## Privacidade

A página inicial usa o Google Analytics 4. Se mudar isso (adicionar a outras páginas, trocar de ferramenta ou colocar anúncios), atualize `privacidade.html`.

## Canais integrados

- Controle Quebrado: https://www.youtube.com/@controlequebrado_tv (PC, Linux, tecnologia e tutoriais).
- Caio Mendonça: https://www.youtube.com/@caiomendonca8509/videos (games, Need for Speed, atualizações e comunidade).

## Critério editorial para rumores e vazamentos

Identifique sempre o status da informação: confirmação oficial, reportagem atribuída, vazamento com evidências, rumor sem confirmação ou teoria da comunidade. Não publique arquivos vazados, executáveis ou links de distribuição. Atualize matérias antigas em vez de apagar URLs já indexadas.


## Linha editorial ampliada

O portal integra os canais Controle Quebrado e Caio Mendonça. Cobertura: PC, Linux, games, emulação, Need for Speed, projetos comunitários, notícias oficiais, descobertas, rumores e vazamentos. Rumores e informações não confirmadas devem ser identificados claramente e não apresentados como fatos.


## Arquivo de vídeos

A página `videos.html` reúne vídeos dos canais Controle Quebrado e Caio Mendonça. Títulos, canais e datas devem ser conferidos no YouTube antes de novas publicações.


## Revisão de 28/11/2026

Consulte `REVISAO-EDITORIAL-2026-11-28.md` para o resumo das atualizações, critérios editoriais e pendências de confirmação dos vídeos. O arquivo `videos.html` reúne os dois canais e há páginas individuais para cada canal.
