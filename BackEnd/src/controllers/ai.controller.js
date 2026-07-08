// module.exports.getReview = async (req, res) => {
//     console.log("✅ Request reached backend");
//     console.log(req.body);

//     // rest of your code...
// }


const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res)=>{

    const code = req.body.code;
    if(!code){
        return res.status(400).send("prompt is required")
    }

    const response = await aiService(code);

return res.send(response);

}