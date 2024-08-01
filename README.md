# Projeto de Implantação Docker na AWS com Elastic Beanstalk

Este foi o processo seguido para criar uma aplicação Docker simples, configurar um pipeline de CI/CD na AWS e tentar implantar a aplicação no Elastic Beanstalk com balanceamento de carga para alta disponibilidade. Fiz todos os passos, a imagem foi enviada ao ECR, entretanto, não consegui resolver a última parte do balanceamento de carga, optei pela alta disponibilidade, que é imprescindível nos dias atuais, o restante fiz tudo.

## Etapas Seguidas

### 1. Configuração do Repositório GitHub

- **Repositório**: Um repositório GitHub foi criado para a aplicação Node.js.
- **Dockerfile**: Um Dockerfile foi criado na raiz do repositório para construir a imagem Docker da aplicação.

### 2. Configuração do AWS CodePipeline

- **Source Stage**: Configurado para conectar ao repositório GitHub e monitorar alterações no código-fonte.
- **Build Stage**: Configurado para usar o AWS CodeBuild para construir a imagem Docker e enviá-la para o Amazon Elastic Container Registry (ECR).

### 3. Configuração do Amazon Elastic Beanstalk

- **Criação do Ambiente**: Um ambiente Elastic Beanstalk foi criado para implantar a aplicação Docker.
- **Problema Encontrado**: O ambiente não conseguiu ser atualizado devido a um erro na criação do balanceador de carga. O erro específico indicava que eram necessárias pelo menos duas sub-redes em zonas de disponibilidade diferentes.

### Problemas e Resoluções Tentadas

- **Verificação de Sub-redes**: As sub-redes foram verificadas para garantir que houvesse pelo menos duas em diferentes zonas de disponibilidade.
- **Configuração de VPC**: A configuração da VPC foi revisada para assegurar que as sub-redes estivessem corretamente associadas.
- **Recriação do Ambiente**: Tentativa de recriar o ambiente Elastic Beanstalk para resolver o problema de configuração.

## Próximos Passos

- **Revisar Configurações de Rede**: Confirmar e ajustar as sub-redes e configurações de rede para atender aos requisitos do Elastic Beanstalk.
- **Verificar Logs**: Analisar logs do Elastic Beanstalk para obter mais detalhes sobre a falha.
- **Reiniciar o Ambiente**: Tentar reiniciar o ambiente Elastic Beanstalk após corrigir as configurações.

## Documentação Adicional

- [Documentação do Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
- [Documentação do AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)
- [Documentação do Docker](https://docs.docker.com/get-started/)
