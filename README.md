

### 🚀 Magazord Frontend Test  

Teste para vaga de Frontend Developer na **Magazord**. Este projeto foi desenvolvido utilizando **Next.js**, **TypeScript**, **Zustand** e **SWR** para gerenciamento de estado e cache.  

## 📌 Tecnologias utilizadas  
- **Next.js (App Router)** → Framework para otimizar a aplicação.  
- **TypeScript** → Tipagem estática para maior segurança no código.  
- **Zustand** → Gerenciamento global de estado.  
- **SWR** → Cache e revalidação automática dos dados da API do GitHub.  
- **TailwindCSS** → Estilização eficiente e responsiva.  
- **React Icons & Lucide Icons** → Ícones modernos e leves.  

## 📜 Funcionalidades implementadas  
✅ Carregamento dinâmico de dados da **API do GitHub**.  
✅ Exibição de repositórios e favoritos do usuário.  
✅ Barra de pesquisa funcional ao pressionar **Enter**.  
✅ Design responsivo baseado no **layout do Figma**.  
✅ Deploy na **Vercel** para testes rápidos.  

---

## 🛠 Como rodar o projeto  

1️⃣ **Clone o repositório:**  
```sh
git clone https://github.com/seu-usuario/magazord-frontend-react-test.git
cd magazord-frontend-react-test
```  

2️⃣ **Instale as dependências com Yarn:**  
```sh
yarn install
```  

3️⃣ **Configure as variáveis de ambiente:**  
Crie um arquivo **.env.local** na raiz do projeto e adicione:  
```env
NEXT_PUBLIC_GITHUB_TOKEN=https://api.github.com
```  

4️⃣ **Inicie o servidor de desenvolvimento:**  
```sh
yarn dev
```  
O projeto estará disponível em **http://localhost:3000** 🚀  

---

## ⚠️ Desafios encontrados e como foram resolvidos  

### 1️⃣ Problema: **Atualização infinita ao salvar repositórios no Zustand**  
**Causa:** O estado global estava sendo atualizado dentro do `useEffect`, sem verificar se os dados já estavam armazenados corretamente.  
✅ **Solução:** Implementamos um controle de dependências adequado, garantindo que os dados só fossem armazenados quando houvesse mudanças reais.  

### 2️⃣ Problema: **A busca não atualizava corretamente os repositórios**  
**Causa:** O estado `searchQuery` estava sendo armazenado corretamente no Zustand, mas o filtro estava sendo aplicado apenas nos dados exibidos, sem alterar a fonte original dos dados.  
✅ **Solução:** A lógica foi ajustada para que `searchQuery` seja armazenado no Zustand, enquanto o filtro é aplicado diretamente nos repositórios renderizados no componente `Repositories`, garantindo que apenas os dados visíveis sejam filtrados corretamente.  

### 3️⃣ Problema: **Layout desalinhado em telas grandes**  
**Causa:** O **Header** não estava corretamente centralizado em relação ao conteúdo principal.  
✅ **Solução:** Ajustamos o `max-width` do container principal e utilizamos **margin auto** para garantir alinhamento consistente em todas as telas.  

---

## 🔥 Melhorias futuras  

- **SSR (Server Side Rendering):** Implementar para melhorar a performance e evitar excesso de requisições à API do GitHub.  
- **Paginação:** Implementar uma paginação eficiente para carregar os repositórios em lotes menores, otimizando a experiência do usuário.  
- **Testes automatizados:** Adicionar **Jest** e **React Testing Library** para garantir maior confiabilidade do código.  
- **Dark Mode:** Implementar suporte ao tema escuro para melhorar a experiência do usuário.  
- **Filtros por linguagem e tipo de repositório:** Ainda não implementado, mas será adicionado em uma próxima iteração.  

---

## 🎯 Conclusão  

Este projeto foi desenvolvido seguindo boas práticas de **arquitetura**, **estado global eficiente** e **cache otimizado**. A aplicação atende aos requisitos propostos e foi otimizada para performance e experiência do usuário. 🚀  

---

Caso tenha alguma dúvida ou sugestão, fique à vontade para entrar em contato! 😃  

