# CelfootBahia — publicar no GitHub e instalar como app no celular

Este pacote contém tudo que o jogo precisa. Você **não precisa programar** — é só
subir os arquivos no GitHub e ligar o GitHub Pages.

## Arquivos deste pacote
- `index.html` — o jogo (não renomeie; o GitHub Pages abre o `index.html` sozinho)
- `manifest.webmanifest` — descreve o app (nome, ícone, cores)
- `sw.js` — faz o jogo funcionar **offline** depois de aberto uma vez
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` — ícones

> Mantenha TODOS os arquivos na **mesma pasta** (a raiz do repositório).

---

## Parte 1 — Publicar no GitHub Pages (site grátis)

1. Entre em https://github.com e faça login (crie a conta se não tiver).
2. Clique no **+** (canto superior direito) → **New repository**.
3. Em *Repository name*, escreva por exemplo `celfootbahia`. Marque **Public**. Clique **Create repository**.
4. Na página do repositório vazio, clique em **uploading an existing file**
   (ou aba **Add file → Upload files**).
5. **Arraste os 7 arquivos deste pacote** (index.html, manifest, sw.js e os 4 ícones)
   para a área de upload. Espere subir e clique **Commit changes**.
6. Vá em **Settings** (engrenagem no topo do repositório) → menu lateral **Pages**.
7. Em *Build and deployment* → *Source*, escolha **Deploy from a branch**.
   Em *Branch* escolha **main** e a pasta **/ (root)**. Clique **Save**.
8. Espere ~1 minuto e recarregue a página. O GitHub mostrará o endereço:
   `https://SEU-USUARIO.github.io/celfootbahia/`
   Esse é o link do seu jogo online. 🎉

Sempre que quiser atualizar o jogo, é só subir um novo `index.html` (Add file → Upload files)
por cima do antigo.

---

## Parte 2 — Instalar como app no celular

Abra o link `https://SEU-USUARIO.github.io/celfootbahia/` **no navegador do celular**
(Safari no iPhone, Chrome no Android — **não** dentro do Instagram).

### iPhone / iPad (Safari)
1. Toque no botão **Compartilhar** (quadrado com seta pra cima).
2. Role e toque em **Adicionar à Tela de Início**.
3. Confirme o nome "CelfootBahia" e toque **Adicionar**.
4. O ícone aparece na tela inicial. Ao abrir por ele, roda **em tela cheia**,
   com o tema escuro completo e **salvamento que não some** entre sessões.

### Android (Chrome)
1. Toque no menu **⋮** (três pontos).
2. Toque em **Instalar aplicativo** (ou "Adicionar à tela inicial").
3. Confirme. O ícone vira um app normal, abre em tela cheia e funciona offline.

---

## Por que isso resolve o problema do salvamento
Dentro do navegador do Instagram, o armazenamento local é apagado entre sessões —
por isso o "Continuar" sumia. Instalado como app (Safari/Chrome → Tela de Início),
o jogo tem armazenamento próprio e **persistente**. Mesmo assim, para backup ou trocar
de aparelho, use **💾 Jogo → Exportar arquivo (.cfb)** e depois **Importar**.

## Dica de segurança do progresso
- O app guarda os saves no próprio aparelho.
- Trocou de celular ou limpou o navegador? Use **Exportar/Importar .cfb**.

Bom jogo! ⚽
