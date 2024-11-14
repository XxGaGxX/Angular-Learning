class Birra{
    id? : number = 0;
    nome?: string;
    prezzo?: number = 0;
    tot? : number = 0;
}

class Ordine{
    id? : number = 0;
    idBirra? : number;
    stato? : "Ordinata" | "Servita" = "Ordinata";
}
