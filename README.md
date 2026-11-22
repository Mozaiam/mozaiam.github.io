# Controle Quebrado

Site estático do canal [Controle Quebrado](https://www.youtube.com/@controlequebrado_tv) (PC, games, Linux e tecnologia), publicado no GitHub Pages em https://mozaiam.github.io/.

Não há build nem dependências: basta editar os arquivos e enviar para o repositório.

## Estrutura

| Arquivo | Para que serve |
|---|---|
| `index.html` | Página inicial: destaque, vídeos, notícias, guias e apoio |
| `noticias.html` | Arquivo com todas as notícias e busca |
| `noticia-*.html` | Notícias de Linux, games e emulação |
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
