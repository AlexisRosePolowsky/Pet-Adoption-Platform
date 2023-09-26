import data from "./data";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dogs: data.dogInfo1,
			dogs2: data.dogInfo2,
			dogs3: data.dogInfo3,
			cart: []

		},
		actions: {
			addtocart: (name) =>{
				let cart= getStore().cart
				cart.push(name)
				setStore({cart:cart})
			},
			deletefromcart: (index) =>{
				let cart= getStore().cart
				let filteredCart= cart.filter((item,idx)=>idx != index)
				setStore({cart:filteredCart})
			},
			// fetchDogs: () =>{
			// 	fetch("https://dogapi.dog/api/v2/breeds")
			// 	.then((response)=> response.json())
			// 	.then((data)=> {
			// 		console.log(data)
			// 		setStore({dogs:data.data})
			// 	})
			// 	.catch((error)=>{console.log(error)})
			// },
			// fetchDogs2: () =>{
			// 	fetch("https://dogapi.dog/api/v2/breeds?page[number]=2&pages=2")
			// 	.then((response)=> response.json())
			// 	.then((data)=> {
			// 		console.log(data)
			// 		setStore({dogs2:data.data})
			// 	})
			// 	.catch((error)=>{console.log(error)})
			// },
			// fetchDogs3: () =>{
			// 	fetch("https://dogapi.dog/api/v2/breeds?page[number]=3&pages=3")
			// 	.then((response)=> response.json())
			// 	.then((data)=> {
			// 		console.log(data)
			// 		setStore({dogs3:data.data})
			// 	})
			// 	.catch((error)=>{console.log(error)})
			// },

			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;