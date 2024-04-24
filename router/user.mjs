import express from "express";
import user from "../model/user.mjs";

const router = express.Router();

console.log("router User");
// ============= Get ==================

router.get('/', async (req, res) => {
    // try {
    //     // Retrieve the user ID from the request's authorization header
    //     const userId = req.user.id;

    //     // Fetch data for the logged-in user based on the user ID
    //     const userData = await user.findById(userId);

    //     if (!userData) {
    //         return res.send({ message: 'User not found' });
    //     }

    //     res.send({ message: 'Success', data: userData });
    // } catch (error) {
    //     console.error('Error fetching user data:', error);
    //     res.send({ error: error.message }); // Send error message to client
    // }
    try {
        const users = await user.find();
        res.send({ message: 'user fetched successfully!', data: users });
    } catch (error) {
        res.status(500).send({ message: 'Error fetching products!', error: error.message });
    }
});



// ============= Register ==================

// fetch('http://localhost:3001/user/register', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json" 
//     },
//     body: JSON.stringify({ 
//         fullname: "faizan",
//         email: "faizanmatee1@gmail.com",
//         password: "12345678",
//     })
// })
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(error => console.error('Error:', error));

router.post('/register', async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the email already exists in the database
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            res.send({ message: 'Email Already Exit' });
        } else {

            const users = await user.create(req.body); // Create new user

            // Generate token for the newly registered user
            const token = users.generateToken();

            res.send({ message: 'Registered Successfully!', token: token, users: users });
        }
    } catch (e) {
        res.send({ message: e.message });
    }
})


// =================== Login =================

// fetch('http://localhost:3001/user/login', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json" 
//     },
//     body: JSON.stringify({
//         email: "faizanmatee1@gmail.com",
//         password: "12345678",
//     })
// })
//   .then(res => res.json())
//   .then(res => console.log(res))
//       .catch(error => console.error('Error:', error));

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const users = await user.findOne({ email })
    if (!users) {
        res.send({ message: "Email doesn't exist" })
        return
    }

    const isCorrectPwd = users.comparePassword(password)

    if (!isCorrectPwd) {
        res.send({ message: 'Invalid Password' })
        return
    }


    const token = users.generateToken()
    // console.log("user",token);

    res.send({ message: "Logged in successfully", token: token, users: users })

})


export default router;
