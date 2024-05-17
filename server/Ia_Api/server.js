
import cors from 'cors';
const { Configuration, OpenAIApi } = require('openai');

// Configuración del cliente de OpenAI
app.use(cors({
  origin: 'http://localhost:8100'
}));

const configuration = new Configuration({
  apiKey: 'lm-studio',
  basePath: 'http://localhost:1234/v1'
});
const openai = new OpenAIApi(configuration);

let history = [
  { role: 'system', content: 'Eres un asistente virtual para una aplicación de facturación llamada IACommerce. como asistente debes ser capaz de realizar las siguientes funciones. Proporcionar asistencia y responder preguntas relacionadas con el proceso de facturación. Debes de ser amigable, eficiente y capaz de comprender y procesar los comandos de texto ingresado por el usuario. garantizando la privacidad y seguridad de los datos del cliente. Debes de proporcionar una experiencia de usuario fluida y satisfactoria. RESPONDES EN ESPAÑOL' },
  { role: 'user', content: 'hola, se conciso con el asistente' }
];

async function chatWithAssistant(userInput) {
  history.push({ role: 'user', content: userInput });

  const response = await openai.createChatCompletion({
    model: 'lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF',
    messages: history,
    temperature: 0.7,
    stream: true
  });

  let newMessage = { role: 'assistant', content: '' };

  for await (const chunk of response.data) {
    if (chunk.choices[0].delta.content) {
      process.stdout.write(chunk.choices[0].delta.content);
      newMessage.content += chunk.choices[0].delta.content;
    }
  }

  history.push(newMessage);
  console.log();
  return newMessage.content;
}

// Ejemplo de uso
chatWithAssistant("¿Cuál es la capital de Francia?").then(response => {
  console.log("Respuesta del asistente:", response);
});