
---

# Conversor de Moedas: Real para Dólar e Vice-Versa

![Visualização do Conversor](./assets/preview.png)

## Sobre o Projeto
Este é um conversor de moedas que permite converter valores de Real (BRL) para Dólar (USD) e vice-versa, utilizando taxas de câmbio atualizadas em tempo real através da API **ExchangeRate**. O projeto foi desenvolvido com HTML, CSS e JavaScript, sendo meu primeiro projeto utilizando uma API externa. Ele foi criado para fins educativos e de aprendizado.

## Funcionalidades
- Conversão de Real para Dólar em tempo real.
- Conversão de Dólar para Real em tempo real.
- Taxas de câmbio atualizadas automaticamente via API.
- Prevenção de entradas inválidas (como letras ou mais de um ponto decimal).
- Interface limpa e responsiva.
- Tratamento de erros para falhas na requisição da API.

## Tecnologias Utilizadas
- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização e responsividade.
- **JavaScript**: Lógica para a conversão, validação dos inputs e integração com a API.
- **ExchangeRate API**: Para obter as taxas de câmbio atualizadas.

## Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/mikelj917/conversor-moedas.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd conversor-moedas
   ```

3. Renomeie o arquivo `config.example.js` para `config.js` e insira sua chave de API da ExchangeRate:
   ```javascript
   const API_KEY = "sua_chave_aqui";
   export default API_KEY;
   ```

4. Abra o arquivo `index.html` em seu navegador.

5. Digite o valor em um dos campos (Real ou Dólar) e veja a conversão aparecer no outro campo automaticamente.

## Estrutura do Projeto
```
conversor-moedas/
├── assets/
│   ├── style.css         # Estilos do projeto
│   ├── logo.png          # Logotipo do projeto
│   └── preview.png       # Imagem para visualização
├── js/
│   ├── script.js         # Lógica da conversão e integração com a API
│   ├── config.js         # Arquivo de configuração da API (ignorado pelo Git)
│   └── config.example.js # Exemplo de configuração da API
├── index.html            # Estrutura principal do projeto
└── README.md             # Documentação do projeto
```

## Personalização
Para alterar a moeda de conversão ou ajustar o comportamento do conversor, edite o arquivo `js/script.js`. Por exemplo, você pode modificar o código para usar outras moedas disponíveis na API ExchangeRate.

## Tratamento de Erros
Caso a API não consiga ser acessada (por exemplo, devido a problemas de rede ou chave inválida), o projeto exibirá uma mensagem de erro e ocultará a interface do conversor.

## Contribuição
Sinta-se à vontade para contribuir com melhorias neste projeto. Abra uma issue ou envie um pull request com suas sugestões.

## Licença
Este projeto é de uso livre para fins educativos e está sob a licença MIT.

---

### Observações:
- O arquivo `config.js` é ignorado pelo Git (via `.gitignore`) para proteger sua chave de API.
- O arquivo `config.example.js` serve como modelo para que outros desenvolvedores possam configurar o projeto facilmente.