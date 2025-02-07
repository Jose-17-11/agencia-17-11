import { useState } from 'react';
import showdown from 'showdown';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isBotTyping, setIsBotTyping] = useState(false);

    const converter = new showdown.Converter();

    const handleSend = async () => {
        setInput('');
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: input };

        setMessages((prevMessages) => [...prevMessages, userMessage]);

        setIsBotTyping(true);

        try {
            const response = await fetch('https://api-server.agencia1711.site/api-openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ textPrompt: input, modelParam: null }),
            });

            if (!response.ok) {
                throw new Error('Error fetching response from API');
            }

            const data = await response.json();
            const botMessage = { sender: 'bot', text: data.content };

            setMessages((prevMessages) => [
                ...prevMessages,
                botMessage
            ]);

            setIsBotTyping(false);
        } catch (error) {
            console.error('Error fetching response from API:', error);
            setIsBotTyping(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-32 p-4 bg-gray-100 rounded-2xl shadow-md">
            <div className="h-80 overflow-y-auto p-4 bg-white rounded-xl shadow-inner mb-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 my-2 text-sm rounded-lg ${
                            message.sender === 'user'
                                ? 'bg-blue-500 text-white text-right'
                                : 'bg-gray-300 text-gray-900 text-left'
                        }`}
                        dangerouslySetInnerHTML={{
                            __html: message.sender === 'bot' ? converter.makeHtml(message.text) : message.text,
                        }}
                    />
                ))}
                {isBotTyping && (
                    <div className="p-2 my-2 text-sm rounded-lg bg-gray-100 text-gray-900 text-left relative">
                        <i className='absolute right-2 animate-bounce transition-all text-2xl' >...</i>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ingrese su mensaje..."
                />
                <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
