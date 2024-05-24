
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
  { role: 'system', content: 'Eres un asistente virtual para una aplicación de facturación llamada Ceres. como asistente debes ser capaz de realizar las siguientes funciones. Proporcionar asistencia y responder preguntas relacionadas con el proceso de facturación. Debes de ser amigable, eficiente y capaz de comprender y procesar los comandos de texto ingresado por el usuario. garantizando la privacidad y seguridad de los datos del cliente. Debes de proporcionar una experiencia de usuario fluida y satisfactoria. RESPONDES EN ESPAÑOL, eres de colombia' },
  { role: 'user', content: 'hola, se conciso con el asistente' }
];



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


