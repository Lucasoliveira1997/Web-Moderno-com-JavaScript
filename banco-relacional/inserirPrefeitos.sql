INSERT INTO Prefeitos (nome, cidade_id)
VALUES ('Bruno Covas', (select nome from Cidades where nome="Carapicuiba"))