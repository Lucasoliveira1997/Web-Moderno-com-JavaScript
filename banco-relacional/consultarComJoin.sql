select e.nome as Estado, c.nome as Cidade, regiao as Regiao from estados e, cidades c
where e.id = c.estado_id;

select * from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as regiao
from cidades c
inner join estados e on e.id = c.estado_id