'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, ArrowUpRight } from 'lucide-react';
import { SUPPORT_WHATSAPP_LINK } from '@/lib/promises';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatAssistantProps {
  quoteContext?: {
    origin?: string;
    destination?: string;
    distanceKm?: number;
    expressPrice?: number | string;
    lowCostPrice?: number | string;
  };
}

export function ChatAssistant({ quoteContext }: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        '¡Hola! Soy el asistente de Envíos DosRuedas en Mar del Plata. ¿En qué te puedo ayudar hoy con tus envíos en moto o tus paquetes?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const userText = input.trim();
    if (!userText || isLoading) return;

    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          history: newMessages.slice(-5).map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            content: m.content,
          })),
          quoteContext,
        }),
      });

      if (!res.ok) throw new Error('Error al conectar');

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || 'Disculpá, no pude procesar la respuesta.',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Tuve un inconveniente al responderte. Si querés una respuesta ya mismo, escribinos directo por WhatsApp.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 bg-[#FFEC01] text-[#0950F6] border-2 border-[#0950F6] rounded-full font-bold shadow-[0_12px_30px_-5px_rgba(9,80,246,0.35)] hover:scale-105 transition-all duration-200 cursor-pointer"
          aria-label="Abrir asistente de consultas"
        >
          <div className="w-8 h-8 rounded-full bg-[#0950F6] text-[#FFEC01] flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold tracking-wide">¿Dudas? Consultá acá</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white border-2 border-[#0950F6] rounded-3xl shadow-[0_25px_60px_-15px_rgba(9,80,246,0.4)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#0950F6] text-white p-4 flex items-center justify-between border-b border-[#3570F8]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFEC01] text-[#0950F6] flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Bebas_Neue'] text-lg tracking-wider leading-none text-white">
                  ASISTENTE DOSRUEDAS
                </h3>
                <span className="text-[11px] text-[#BACEFD] block">
                  Inteligencia artificial · Respuestas al instante
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white hover:bg-white/20 transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick WhatsApp helper */}
          <div className="bg-[#E6EEFE] px-4 py-2 text-xs text-[#0950F6] flex items-center justify-between border-b border-[#BACEFD]">
            <span>¿Preferís hablar con un operador?</span>
            <a
              href={SUPPORT_WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#0950F6] underline flex items-center gap-0.5 hover:text-[#3570F8]"
            >
              WhatsApp <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAFCFF]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#0950F6] text-[#FFEC01] flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#0950F6] text-white rounded-br-none shadow-[0_4px_12px_rgba(9,80,246,0.25)]'
                      : 'bg-white text-[#0950F6] border border-[#BACEFD] rounded-bl-none shadow-[0_2px_8px_rgba(9,80,246,0.08)]'
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#FFEC01] text-[#0950F6] border border-[#0950F6] flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2.5 items-center text-xs text-[#628FF9] italic">
                <div className="w-7 h-7 rounded-lg bg-[#0950F6] text-[#FFEC01] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <span>Escribiendo respuesta...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-[#BACEFD] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Preguntame sobre tarifas, franjas, cortes..."
              className="flex-1 px-4 py-2.5 text-sm bg-[#E6EEFE]/40 border border-[#BACEFD] rounded-full text-[#0950F6] placeholder-[#628FF9] focus:outline-none focus:border-[#0950F6]"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-full bg-[#FFEC01] text-[#0950F6] border border-[#0950F6] hover:bg-[#FFF12E] disabled:opacity-50 transition-colors"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
