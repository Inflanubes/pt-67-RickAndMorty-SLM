const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersInfo:[],
			characterDetails:{},
		},
		actions: {
			getCharacters: async() =>{
				const res = await fetch (`https://rickandmortyapi.com/api/character`)
				const data = await result.json
				setStore ({charactersInfo: data.results})
			},

			getSingleCharacter: async() =>{
				const res = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
				const data = await result.json
				setStore ({characterDetails:data})
			}
		}
	};
};

export default getState;
