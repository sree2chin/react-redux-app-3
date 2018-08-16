export function moviesList() {
	// usually we take payload from api in real time scenarios.
	return {
		type: 'MOVIES_LIST',
		payload: [
			{
				id: 1,
				name: "Pulp Fiction"
			},
			{
				id: 2,
				name: "Fight Club"
			},
			{
				id: 3,
				name: "Titanic"
			}
		]
	}
	
}