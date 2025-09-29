// src/components/react/createChatComponent.jsx
import '@n8n/chat/style.css';
import { useEffect, useRef } from 'react';
import { createChat } from '@n8n/chat';

const N8N_CHAT_WEBHOOK = "https://n8n-produccion.agencia1711.lat/webhook/96f64ff1-b1db-419e-a03c-ce601a37380f/chat";

// Contenedor React para el widget de n8n
const CreateChatComponent = () => {
  useEffect(() => {
		createChat({
			webhookUrl: N8N_CHAT_WEBHOOK,
      theme: "#06B6D4", 
      initialMessages: [
        '¡Hola! Soy el Asistente de Agencia 17-11. 🚀',
        'Estoy aquí para responder preguntas sobre nuestros servicios, portafolio y precios.'
      ],
      i18n: {
        en: {
          title: "Asistent Agencia 17-11",
          subtitle: "Questions 24/7 about me services.",
          inputPlaceholder: "Write your question "
        },
        es: {
          title: "Asistente Agencia 17-11",
          subtitle: "Preguntas 24/7 sobre nuestros servicios.",
          inputPlaceholder: "Escribe tu pregunta "
        }
      },
      
      // 🟢 CAMBIAR: Usamos un verde vibrante como color principal
      theme: "#A3E635", // Un verde lima/ácido (Lime 400 de Tailwind)
      
      // Personalización del botón flotante
      button: {
        position: 'right',
        bottom: 40, // Separación un poco mayor
        right: 40,
        welcomeMessage: '¡Asistente!',
      },
      
      // 💡 Opcional: Establecer el idioma por defecto a 'es' para que use tus textos
      defaultLanguage: 'es', 
      
      // Opcional: Habilitar streaming si tu workflow lo soporta
      // enableStreaming: true,
    });
	}, []);

	return (<div className='rounded-xl' ></div>);
};

export default CreateChatComponent;