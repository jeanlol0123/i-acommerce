import axios from 'axios';

// Configura el cliente para apuntar al servidor local
const client = axios.create({
  baseURL: 'http://localhost:1234/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer lm-studio' // Clave de API
  }
});

const history = [
  { role: "system", content: "Eres un asistente virtual para una aplicación de facturación llamada 'IACommerce'. como asistente debes ser capaz de realizar las siguientes funciones. Proporcionar asistencia y responder preguntas relacionadas con el proceso de facturación. Debes de ser amigable, eficiente y capaz de comprender y procesar los comandos de texto ingresado por el usuario. garantizando la privacidad y seguridad de los datos del cliente. Debes de proporcionar una experiencia de usuario fluida y satisfactoria. RESPONDES EN ESPAÑOL" },
  { role: "user", content: "Hello, introduce yourself to someone opening this program for the first time. Be concise." }
];

async function chatLoop() {
  while (true) {
    try {
      const response = await client.post('/chat/completions', {
        model: "lmstudio-community/Meta-Llama-3-8B-Instruct-GGUF",
        messages: history,
        temperature: 0.7,
        stream: true
      });

      let newMessage = { role: "assistant", content: "" };

      response.data.choices.forEach((chunk) => {
        if (chunk.delta && chunk.delta.content) {
          process.stdout.write(chunk.delta.content);
          newMessage.content += chunk.delta.content;
        }
      });

      console.log();
      history.push(newMessage);
      history.push({ role: "user", content: await getUserInput() });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
}

function getUserInput() {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    readline.question("> ", (input) => {
      readline.close();
      resolve(input);
    });
  });
}

chatLoop();
