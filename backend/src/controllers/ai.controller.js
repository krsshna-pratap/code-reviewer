const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    // const prompt = req.query.prompt;
    // const prompt = req.body.prompt;
    const code = req.body.code;
    if(!code){
        return res.status(400).send('prompt is required');
    }
    const response = await aiService(code);
    res.send(response);
}