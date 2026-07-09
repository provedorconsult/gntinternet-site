# GNT Internet — Site institucional

Site estático do provedor GNT Internet (gntinternet.com.br), servido por nginx e publicado via Dokploy.

## Estrutura

- `public/` — arquivos do site (HTML, CSS, JS)
- `public/assets/config.js` — **dados de contato: edite aqui** WhatsApp, telefone, e-mail, horário de atendimento e linha legal do rodapé
- `Dockerfile` + `nginx.conf` — build da imagem para deploy

## Como atualizar conteúdo

1. Contatos/WhatsApp: edite `public/assets/config.js`.
2. Planos e preços: edite a seção `#planos` em `public/index.html`.
3. Commit + push na branch `main` — o Dokploy faz o deploy.

## Rodar localmente

```bash
docker build -t gntinternet-site .
docker run --rm -p 8080:80 gntinternet-site
# abra http://localhost:8080
```
