let express = require('express')

let app = express();

// middleware for connvert normal data into json data make readable for express
app.use(express.json());

let port = 3000;

let user = []

//create/post-write method
app.post('/create' , (req , res)=> {
	let body = req.body

	user.push(body)
	res.send('user Saved');
	

	
})


// get - read method
app.get('/' , (req, res) => {
	res.send(user)
})

//delete method
app.delete('/delete/:id' , (req , res) => {
	let {id} = req.params
	let userData = user.filter((val) => val.id !== id)
	user = userData;
	res.send(user)
})
    
//update method
app.put('/update/:id' , (req , res) => {
	let {id} = req.params;
	let {name ,age} = req.body
	

	let updateUser = user.map((val) => val.id === id ? { ...val ,name ,age} : val );
	user = updateUser;
	res.send(user)
})


app.listen(port,()=>{
	console.log(`server is running onport ${port}...`)
})



