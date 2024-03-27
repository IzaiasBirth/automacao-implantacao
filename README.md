# Automação de Implantação com GitHub Actions

Este projeto demonstra como automatizar o processo de implantação de uma aplicação web simples utilizando GitHub Actions, que é uma parte essencial de uma prática DevOps, permitindo entregas rápidas e consistentes de software.

## Funcionalidades Principais

- Configuração de pipeline de CI/CD usando GitHub Actions.
- Implantação automatizada da aplicação em um ambiente de produção.
- Testes de unidade e integração automatizados como parte do pipeline.

## Tecnologias Utilizadas

- GitHub Actions
- Node.js (aplicação)
- Docker (contêinerização)
- Jest (testes automatizados)

## Estrutura do Repositório

- `.github/workflows/main.yml`: Arquivo de configuração do GitHub Actions que define o pipeline de CI/CD.
- `app/`: Pasta contendo o código-fonte da aplicação.
- `tests/`: Pasta contendo os testes automatizados.

## Configuração

1. Clone este repositório:

    ```bash
    git clone https://github.com/IzaiasBirth/automacao-implantacao.git
    ```

2. Instale as dependências da aplicação:

    ```bash
    cd automacao-implantacao/app
    npm install
    ```

3. Execute os testes automatizados:

    ```bash
    npm test
    ```

## Configuração do Pipeline de CI/CD

O pipeline de CI/CD é configurado utilizando o GitHub Actions. Ele é acionado a cada push ou pull request no repositório. As etapas do pipeline incluem:

1. **Build da aplicação**: Compilação e empacotamento da aplicação.
2. **Testes automatizados**: Execução de testes de unidade e integração.
3. **Implantação**: Implantação automatizada da aplicação em um ambiente de produção.

Para mais detalhes sobre a configuração do pipeline, consulte o arquivo `.github/workflows/main.yml`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request com melhorias, correções ou novos recursos. O objetivo desse projeto é o aprendizado e a prática de automação de implantação; portanto, erros e problemas serão facilmente observados.

