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
			logout: () => {
				//const cf_url = getStore().cf_url
				const token = sessionStorage.removeItem("token");
				setStore({ token: null });
				return new Promise((resolve, reject) => {
					if (!getStore().token) resolve()
					else reject()
				})
			},

			createUser: async (username, email, password) => {
				const opts = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,

					})
				};
				try {
					console.log(process.env.BACKEND_URL + "/signup");
					const result = await fetch(process.env.BACKEND_URL + "/api/signup", opts)
					//const data = await result.json() // unexpected end of JSON is coming from here.
					//setStore({ user: data })
					console.log(result);
					return true

				} catch (error) {
					console.log("signup error here!", error)
				}

			},

			login: async (email, password) => {
				console.log(email, password);
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};
				const res = await fetch(process.env.BACKEND_URL + "/api/login", opts);
				if (res.status < 200 || res.status >= 300) {
					throw new Error("There was an error signing in");
				}
				const data = await res.json();

				sessionStorage.setItem("token", data.token);
				console.log(data.token)

				// data.favorites.forEach(f => {
				//   //was returning an error bc it didnt like the single quotes so the line below turns the single into double quotes 
				//   f.item = f.item.replace(/'/g, '"')
				//   f.item = JSON.parse(f.item)
				// })
				console.log("USER INFO HERE", data)
				setStore({
					token: data.token,
					// These aren't on the response from the login
					// So you can either change the backend to send the user data
					// along with the token, or change this to make a second request for this data.
					
				});
				return true;
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