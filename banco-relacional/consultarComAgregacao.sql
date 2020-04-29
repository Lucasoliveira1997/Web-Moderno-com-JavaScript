select 
    regiao as 'Região', 
    sum(populacao) as Total
from estados
group by regiao
order by Total desc

select 
    sum(populacao) as Total
from estados

--Função para tirar a média
select 
    avg(populacao) as Total
from estados