class Receita
{
    constructor(id, nome, tempo, nivel, quant, foto, url)
    {
        this.Id = id;
        this.Nome = nome;
        this.Tempo = tempo;
        this.Nivel = nivel;
        this.Quant = quant;
        this.Foto = foto;
        this.Url = url;
    }
}

var receitas = []; 


receitas.push(new Receita(1, "Bacalhau à Brás", "30min", "Média", "4 pessoas", "images/receitas/bacalhau.jpg", "bacalhau.html"));
receitas.push(new Receita(2, "Frango com castanhas", "85min", "Média", "6 pessoas", "images/receitas/frango.jpg", "frango.html"));
receitas.push(new Receita(3, "Salada de pato", "45min", "Média", "4 pessoas", "images/receitas/salada-de-pato.jpg", "salada-de-pato.html")); 

