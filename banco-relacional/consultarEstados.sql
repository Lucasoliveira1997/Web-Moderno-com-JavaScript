-- buscar todos os dados
select * from estados

-- buscar filtrando por colunas
select nome, sigla from estados
select sigla, nome from estados

-- Alterando o Label 
select sigla, nome as 'Nome do Estado' from estados

-- usando WHERE para filtrar
select sigla, regiao, nome as 'Nome do Estado' from estados where regiao = 'Norte'

-- usando condição nas buscas
select sigla, nome as 'Nome do Estado' from estados where populacao >= 10

--ordenar de forma crescente
select 
    sigla, 
    populacao as 'Numero de Habitantes', 
    nome as 'Nome do Estado' 
from estados 
where populacao >= 10 order by populacao

--ordenar de forma crescente
select sigla, populacao, nome as 'Nome do Estado' from estados where populacao >= 10 order by populacao desc

--consultando pelo apelido da tabela
select est.nome as 'Nome do estado', est.sigla as 'Sigla do Estado' from estados est where est.regiao = 'Sudeste'
