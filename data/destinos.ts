export type Destino = {
	id: number;
	nome: string;
	imagem: string;
	descricao: string;
	regiao: string;
};

export const destinos: Destino[] = [
	{
		id: 1,
		nome: "Lençóis Maranhenses",
		regiao: "Maranhão",
		imagem:
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=85",
		descricao:
			"Dunas claras desenham um horizonte em movimento, pontuado por lagoas que aparecem na temporada das chuvas.",
	},
	{
		id: 2,
		nome: "Fernando de Noronha",
		regiao: "Pernambuco",
		imagem:
			"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1100&q=85",
		descricao:
			"Mar transparente, vida marinha abundante e praias protegidas em um arquipélago para explorar com calma.",
	},
	{
		id: 3,
		nome: "Chapada Diamantina",
		regiao: "Bahia",
		imagem:
			"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85",
		descricao:
			"Trilhas, grutas e cachoeiras se encontram entre vales amplos e serras de tirar o fôlego.",
	},
	{
		id: 4,
		nome: "Jalapão",
		regiao: "Tocantins",
		imagem:
			"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1100&q=85",
		descricao:
			"Fervedouros, rios e campos de capim dourado compõem uma aventura pelo cerrado brasileiro.",
	},
	{
		id: 5,
		nome: "Bonito",
		regiao: "Mato Grosso do Sul",
		imagem:
			"https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1100&q=85",
		descricao:
			"Rios cristalinos, cavernas e flutuações revelam de perto a natureza preservada da região.",
	},
];
