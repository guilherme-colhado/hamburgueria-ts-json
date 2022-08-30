# hamburgueria-ts-json

## urlbase: https://hamburgueria-whit-json.herokuapp.com/

# Users

## { Post } Registro
### urlbase/register passando com parametgro um Nome, email e senha

## { Post } Login 
### urlbase/login passando com parametgro email e senha

# Carts

## { Get } Obter todos os produtos do seu carrinho
### /carts/{userId} passando como autorização o token

## { Patch } Adicionar e remover produto ao carrinho
### /carts/{userId} alterando a propriedade cart com o novo array da rota carts.