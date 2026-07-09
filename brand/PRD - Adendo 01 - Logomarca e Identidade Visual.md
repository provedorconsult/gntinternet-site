# PRD — Adendo 01: Logomarca e Identidade Visual

**Data:** 09/07/2026
**Complementa:** PRD — Agente IA para Página Web da GNT Internet (seções 2.4 e 15)
**Status:** aplicado ao site em produção

## 1. Logomarca oficial

A GNT Internet passou a ter logomarca oficial (arquivo `gnt-logo-01.jpeg`, também versionado no repositório do site em `site/brand/logo-gnt-original.jpeg`):

- Marca circular com fundo branco
- Símbolo "X" estilizado em verde e vermelho
- Letras "GNT" em marrom-café com acentos em verde e vermelho
- Assinatura "INTERNET FIBRA" em verde escuro

A logomarca confirma a pendência da seção 21 do PRD ("Logotipo oficial da GNT Internet") e confirma o posicionamento **fibra** ("INTERNET FIBRA" faz parte da marca).

## 2. Paleta oficial (extraída da logomarca)

Substitui as cores genéricas da seção 15.2 do PRD:

| Elemento | Cor | Hex |
|---|---|---|
| Verde da marca (botões principais, títulos de seção) | Verde escuro | `#15361c` |
| Verde apoio (hover, gradientes) | Verde médio | `#1e4a28` / `#2e6b3c` |
| Seção link dedicado | Verde profundo | `#0d2312` |
| Vermelho da marca (destaques comerciais, plano 400 Megas) | Vermelho vivo | `#ee2123` |
| Textos | Marrom-café (letras GNT) | `#261410` |
| Fundos principais | Branco | `#ffffff` |
| Seções alternadas | Cinza claro | `#f4f4f2` |

## 3. Aplicações no site

- **Header**: logomarca circular (42 px) + nome "GNT Internet"
- **Rodapé**: logomarca circular (72 px)
- **Favicon**: recorte circular da logomarca (`assets/favicon.png`)
- **Apple touch icon / compartilhamento (og:image)**: `assets/logo-gnt-192.png` / `assets/logo-gnt.png` (512 px)
- **Paleta CSS**: variáveis em `assets/style.css` atualizadas para os valores acima

## 4. Arquivos gerados

| Arquivo | Uso | Tamanho |
|---|---|---|
| `site/public/assets/logo-gnt.png` | Logo 512×512, fundo transparente | ~120 KB |
| `site/public/assets/logo-gnt-192.png` | Header, rodapé, touch icon | ~28 KB |
| `site/public/assets/favicon.png` | Favicon 64×64 | ~5 KB |
| `site/brand/logo-gnt-original.jpeg` | Original preservado | — |

## 5. Pendências remanescentes da seção 21 do PRD

- ~~Logotipo oficial~~ ✔ resolvido por este adendo
- ~~Se os planos são fibra óptica~~ ✔ confirmado pela marca "INTERNET FIBRA"
- Endereço completo (hoje: St. Leste - Brasília, DF, como referência)
- CNPJ e razão social para o rodapé
- Taxa/prazo de instalação, fidelidade, franquia, upload, roteador incluso
- Redes sociais oficiais, política de privacidade, termos de uso, mapa
