INSERT INTO cidades (nome, area, estado_id)
VALUES('Campinas', 795, 2)

INSERT INTO cidades (nome, area, estado_id)
VALUES('Niterói', 133.9, 9)

INSERT INTO cidades (nome, area, estado_id)
VALUES('Carapicuiba', 200, (select id from estados where sigla='SP'))

INSERT INTO cidades (nome, area, estado_id)
VALUES('Caruaru', 920.8, (select id from estados where sigla='PE'))

INSERT INTO cidades (nome, area, estado_id)
VALUES('Boa Esperança', 920.8, (select id from estados where sigla='MG'))

select * from cidades

select nome, area from cidades where estado_id = 2