const aiService = require("../services/ai.service");

module.exports.getRespond = async (req, res)=>{

    const prompt = req.query.prompt;
    if(!prompt){
        return res.status(400).send("prompt is required")
    }

    const response = await aiService(prompt);

return res.send(response);

}