export const postMessage  =  async (req, res) => {
    try{
        const {message} = req.body
        const response = await chatWithAssistant(message);
        res.status(200).json({ message: response });
    } catch(error){
        res.status(500).json({ message: "Ocurrio un error al crear el producto",error:error.message });
    }

}