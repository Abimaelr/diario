const DireitosAp = ['Conviver', 'Brincar', 'Participar', 'Explorar', 'Expressar', 'Conhecer-se'];
const CampExp = ['O eu, o outro e o nós', 'Corpo, gestos e movimentos', 'Traços, sons, cores e formas', 'Escuta, fala, pensamento e imaginação', 'Espaço, tempo, quantidades, relações e transformações'];

module.exports =
    {
        "Fundamental 1": [
            {tipo:'c', nome: "Artes", ha: 2, cod: "f1"},
            {tipo:'n', nome: "Ciências", ha: 4, cod: "f1"},
            {tipo:'c', nome: "Educação Física", ha: 3, cod: "f1"},
            {tipo:'c', nome: "Ensino Religioso", ha: 1, cod: "f1"},
            {tipo:'n', nome: "Geografia", ha: 3, cod: "f1"},
            {tipo:'n', nome: "História", ha: 4, cod: "f1"},
            {tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "f1"},
            {tipo:'n', nome: "Língua Portuguesa", ha: 6, cod: "f1"},
            {tipo:'n', nome: "Matemática", ha: 5, cod: "f1"}
            ],
        "Fundamental 2": [
            {tipo:'n', nome: "Artes", ha: 2, cod: "f2"},
            {tipo:'n', nome: "Ciências", ha: 4, cod: "f2"},
            {tipo:'n', nome: "Educação Física", ha: 3, cod: "f2"},
            {tipo:'c', nome: "Ensino Religioso", ha: 1, cod: "f2"},
            {tipo:'n', nome: "Geografia", ha: 3, cod: "f2"},
            {tipo:'n', nome: "História", ha: 4, cod: "f2"},
            {tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "f2"},
            {tipo:'n', nome: "Língua Portuguesa", ha: 6, cod: "f2"},
            {tipo:'n', nome: "Matemática", ha: 5, cod: "f2"}
        ],
        "Ciclo 1": [
            {tipo:'c', nome: "Artes", ha: 2, eixos: ["Eixo único"], cod: "ai"},
            {tipo:'c', nome: "Ciências", eixos: ["Matéria e Energia", "Vida e Evolução", "Terra e Universo"], ha: 3, cod: "ai"},
            {tipo:'c', nome: "Educação Física", eixos: ["Eixo único"], ha: 3, cod: "ai"},
            {tipo:'c', nome: "Ensino Religioso", eixos: ["Eixo único"], ha: 1, cod: "ai"},
            {tipo:'c', nome: "Geografia", ha: 3, eixos: ["Eixo único"], cod: "ai"},
            {tipo:'c', nome: "História", eixos: ["Mundo Pessoas: Meu lugar no mundo."], ha: 4, cod: "ai"},
            {tipo:'c', nome: "Língua Portuguesa", eixos: ["Oralidade", "Leitura", "Produção de Texto", "Análise Linguística/Semiótica"], ha: 5, cod: "ai"},
            {tipo:'c', nome: "Matemática", eixos: ["Números", "Geometría", "Grandezas e Medidas", "Álgebra"], ha: 5, cod: "ai"}
        ],
        "Ciclo 2": [
            {tipo:'c', nome: "Artes", ha: 2, eixos: ["Eixo único"], cod: "ai"},
            {tipo:'c', nome: "Ciências", eixos: ["Matéria e Energia", "Vida e Evolução", "Terra e Universo"], ha: 3, cod: "ai"},
            {tipo:'c', nome: "Educação Física", eixos: ["Eixo único"], ha: 3, cod: "ai"},
            {tipo:'c', nome: "Ensino Religioso", eixos: ["Eixo único"], ha: 1, cod: "ai"},
            {tipo:'c', nome: "Geografia", ha: 3, eixos: ["Eixo único"], cod: "ai"},
            {tipo:'c', nome: "História", eixos: ["Sujeitos históricos", "Tempo Histórico", "Fatos Históricos"], ha: 4, cod: "ai"},
            {tipo:'c', nome: "Língua Portuguesa", eixos: ["Leitura", "Análise Linguística: Discursividade, Textualidade e Normatividade", "Análise Linguística: Apropriação do Sistema da Escrita Alfabética", "Produção Textual", "Oralidade"], ha: 5, cod: "ai"},
            {tipo:'c', nome: "Matemática", eixos: ["Números e Operações", "Geometría", "Grandezas e Medidas", "Álgebra"], ha: 5, cod: "ai"}
        ],
        "EJA 1° Segmento":  [
            {tipo:'n', nome: "Artes", ha: 1, cod: "eja1"},
            {tipo:'n', nome: "Ciências", ha: 1, cod: "eja1"},
            {tipo:'n', nome: "Educação Física", ha: 1, cod: "eja1"},
            {tipo:'n', nome: "Ensino Religioso", ha: 1, cod: "eja1"},
            {tipo:'n', nome: "Geografia", ha: 1, cod: "eja1"},
            {tipo:'n', nome: "História", ha: 2, cod: "eja1"},
            {tipo:'n', nome: "Língua Portuguesa", ha: 4, cod: "eja1"},
            {tipo:'n', nome: "Matemática", ha: 3, cod: "eja1"},
            {tipo:'n', nome: "Qualificação Profissional", ha: 1, cod: "eja1"},
        ],
        "EJA 2° Segmento":  [
            {tipo:'n', nome: "Artes", ha: 2, cod: "eja2"},
            {tipo:'n', nome: "Ciências", ha: 3, cod: "eja2"},
            {tipo:'n', nome: "Educação Física", ha: 1, cod: "eja2"},
            {tipo:'n', nome: "Ensino Religioso", ha: 1, cod: "eja2"},
            {tipo:'n', nome: "Geografia", ha: 3, cod: "eja2"},
            {tipo:'n', nome: "História", ha: 3, cod: "eja2"},
            {tipo:'n', nome: "Língua Inglesa", ha: 2, cod: "eja2"},
            {tipo:'n', nome: "Língua Portuguesa", ha: 5, cod: "eja2"},
            {tipo:'n', nome: "Matemática", ha: 5, cod: "eja2"},
        ],
        "Educação Infantil": [
            {tipo:'ci', nome: "Cuidando da minha história", ha: 2, cod: "edci"},
            {tipo:'ci', nome: "Cuidando de João Pessoa", ha: 2, cod: "edci"},
            {tipo:'ci', nome: "Cuidando do Planeta", ha: 2, cod: "edci"},
            {tipo:'ci', nome: "Cuidando do ser criança", ha: 2, cod: "edci"},
        ],
        "EJA Alfa": [
            {tipo:'c', nome: "Linguagem Oral e Escrita", ha: 2, cod: "ejaa"},
            {tipo:'c', nome: "Matemática", ha: 2, cod: "ejaa"},
            {tipo:'c', nome: "Estudo da Sociedade e da Natureza", ha: 2, cod: "ejaa"},
            {tipo:'c', nome: "Artes", ha: 2, cod: "ejaa"},
            {tipo:'c', nome: "Educação Física", ha: 2, cod: "ejaa"},
            {tipo:'c', nome: "Ensino Religioso", ha: 2, cod: "ejaa"},
        ]
    }