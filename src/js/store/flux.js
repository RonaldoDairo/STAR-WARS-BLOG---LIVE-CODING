
const getState = ({ getStore, getActions, setStore, getState }) => {

	return {
		store: {
			favorite : [],
		
		}, 
		
		actions: {
			
			addFavorite : (name) =>{

				
					const store = getStore();
					if (!store.favorite.includes(name)) {
					setStore({favorite: [...store.favorite, name]}) 
				}
			},  
			handleDelete : (indexToDelete) => {
				const updatedArray = getStore();
				updatedArray.favorite.splice(indexToDelete, 1)
				setStore(updatedArray)
			  }
			},
			//  ELIMINAR_USUARIO_EXITOSO: ()=>{
					 
			//   ...state,
			//   usuarios: state.usuarios.filter(
			// 	(usuario) => usuario.id !== state.usuarioEliminar
			//   ),
			//   usuarioEliminar: null,
			// };
			
		}
	};


export default getState;
