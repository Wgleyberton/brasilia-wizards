# Brasilia Wizards

Site oficial do Brasilia Wizards - organização esportiva dedicada ao desenvolvimento do futebol americano, flag football e e-sports em Brasilia.

## Sobre o Projeto

Este site apresenta as modalidades esportivas do Brasilia Wizards, incluindo:

- **Futebol Americano** - Time principal da organização
- **Flag Football** - Modalidade sem contato
- **E-sports** - Divisão de esportes eletrônicos
- **Patrocinadores** - Parceiros e apoiadores
- **Anúncios** - Novidades e comunicados

## Tecnologias

- [React](https://react.dev/) - Biblioteca para interfaces de usuário
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [React Router](https://reactrouter.com/) - Navegação entre páginas

## Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis (Header, Footer)
├── pages/          # Páginas do site
│   ├── Home/
│   ├── History/
│   ├── AmericanFootball/
│   ├── FlagFootball/
│   ├── Esports/
│   ├── Sponsors/
│   └── Announcements/
├── styles/         # Estilos globais
├── images/         # Imagens e assets
└── App.jsx         # Componente principal com rotas
```

## Deploy

O site é automaticamente publicado no GitHub Pages através de GitHub Actions a cada push na branch `main`.

## Licença

Este projeto é propriedade do Brasilia Wizards.
