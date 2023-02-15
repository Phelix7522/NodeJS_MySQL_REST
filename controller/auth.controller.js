const jwt = require('jsonwebtoken');

const auth_controller = {

    getGenToken: async (req,res) => {
        mul
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        console.log(req.body)
        const {first,second} = req.body
        console.log(first)

        let data = {
            first: first,
            second: second,
        };
    

        const token = jwt.sign(data, jwtSecretKey);

        try{
            
            res.json(
                    {
                        message:"Success",
                        gen_token: token
                    }
                    )
        } catch (error) {
            console.log(error)
        }

    },

    validateToken : async (req,res) => {

        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const token = req.header(tokenHeaderKey);
            console.log(token)
      
            const verified = jwt.verify(token, jwtSecretKey);
            if(verified){
                return res.send("Successfully Verified");
            }else{
                // Access Denied
                return  res.status(401).send(error)
            
            }
        } catch (error) {
            // Access Denied
            return  res.status(401),
                    res.json({
                        data : error
                    })
        }

    },

    
}

module.exports = auth_controller