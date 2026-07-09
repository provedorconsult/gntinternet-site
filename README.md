# GNT Internet — Site institucional

Landing page do provedor GNT Internet (gntinternet.com.br), construída conforme o PRD oficial, servida por nginx e publicada via Dokploy.

## Dados oficiais (fonte: PRD)

- **WhatsApp da loja**: (61) 99979-9700 → `https://wa.me/5561999799700`
- **Endereço**: St. Leste - Brasília, DF
- **Cobertura**: Brasília e Entorno (12 regiões)
- **Planos residenciais**: 100 Megas R$ 100 · 200 Megas R$ 120 · 400 Megas R$ 140 (destaque)
- **Planos empresariais**: 200 Mb R$ 500 · 400 Mb R$ 800 · 600 Mb R$ 1.200 (1 IP público, suporte até 12h, dupla abordagem sob demanda)
- **Link dedicado**: a partir de R$ 2,00/Mb (monitoramento 24h, reparo até 4h)

## Estrutura

- `public/` — arquivos do site (HTML, CSS, JS)
- `public/assets/config.js` — WhatsApp e mensagens pré-preenchidas dos CTAs
- `Dockerfile` + `nginx.conf` — build da imagem para deploy

## Como atualizar conteúdo

1. WhatsApp/mensagens: edite `public/assets/config.js`.
2. Planos e preços: edite as seções `#planos` e `#empresas` em `public/index.html` (regra do PRD: não alterar preços sem confirmação comercial).
3. Commit + push na branch `main` e acione o deploy no Dokploy.

## Eventos de conversão

Os botões têm `data-event` (click_whatsapp_header, click_plano_400, click_link_dedicado etc. — PRD 17.2). Os eventos são enviados a `window.dataLayer` quando presente (pronto para Google Tag Manager/Analytics na Versão 3).

## Rodar localmente

```bash
docker build -t gntinternet-site .
docker run --rm -p 8080:80 gntinternet-site
# abra http://localhost:8080
```
