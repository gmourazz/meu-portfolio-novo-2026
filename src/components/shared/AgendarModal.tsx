import { openCalendarEvent } from '../../services/calendar';
import { addDays, formatDateLabel, getTimeSlots, startOfDay } from '../../utils/date';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, MessageSquare, Send, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = { onClose: () => void };


const today = startOfDay();

export function AgendarModal({ onClose }: Props) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [weekStart, setWeekStart] = useState(today);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useBodyScrollLock();

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const slots = selectedDate ? getTimeSlots(selectedDate) : [];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    openCalendarEvent({ date: selectedDate!, time: selectedTime!, name: form.name, email: form.email, message: form.message });
    onClose();
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          className="relative w-full max-w-lg bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e1e]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#c8956a]" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Agendar reunião</p>
                <p className="text-xs text-gray-500">Convite enviado direto para o Google Calendar de Geovanna</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {step === 1 ? (
            <div className="p-6">
              {/* Availability info */}
              <div className="flex gap-3 mb-5">
                <div className="flex-1 p-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-center">
                  <p className="text-xs text-gray-500 mb-1">Dias de semana</p>
                  <p className="text-sm font-bold text-white">10h – 22h</p>
                </div>
                <div className="flex-1 p-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-center">
                  <p className="text-xs text-gray-500 mb-1">Fins de semana</p>
                  <p className="text-sm font-bold text-white">08h – 19h</p>
                </div>
              </div>

              {/* Week navigation */}
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => setWeekStart(d => addDays(d, -7))}
                  disabled={weekStart <= today}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 hover:text-white hover:bg-white/5 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 font-medium">Selecione um dia</p>
                <button
                  onClick={() => setWeekStart(d => addDays(d, 7))}
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Day selector */}
              <div className="grid grid-cols-7 gap-1.5 mb-5">
                {days.map((d, i) => {
                  const isPast = d < today;
                  const isSelected = selectedDate?.toDateString() === d.toDateString();
                  const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                  return (
                    <button
                      key={i}
                      disabled={isPast}
                      onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                      className={`flex flex-col items-center p-2 rounded-xl text-xs transition-all duration-200
                        ${isPast ? 'opacity-25 cursor-not-allowed' : 'hover:bg-[#c8956a]/10 cursor-pointer'}
                        ${isSelected ? 'bg-[#c8956a]/20 border border-[#c8956a]/40' : 'border border-transparent'}
                      `}
                    >
                      <span className={`font-medium mb-1 ${isWeekend ? 'text-[#c8956a]' : 'text-gray-400'}`}>
                        {d.toLocaleDateString('pt-BR', { weekday: 'narrow' })}
                      </span>
                      <span className={`font-bold text-sm ${isSelected ? 'text-[#c8956a]' : 'text-white'}`}>
                        {d.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Time slots */}
              {selectedDate && (
                <>
                  <p className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    {formatDateLabel(selectedDate)}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-36 overflow-y-auto pr-1">
                    {slots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all duration-200
                          ${selectedTime === slot
                            ? 'bg-[#c8956a] text-white'
                            : 'bg-[#0a0a0a] border border-[#1a1a1a] text-gray-300 hover:border-[#c8956a]/40 hover:text-white'}
                        `}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
                className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#c8956a]/20 transition-all duration-300"
              >
                Continuar →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6">
              {/* Selected slot recap */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#c8956a]/10 border border-[#c8956a]/20 mb-5">
                <Calendar className="w-4 h-4 text-[#c8956a] flex-shrink-0" />
                <p className="text-sm text-[#c8956a] font-semibold">
                  {selectedDate && formatDateLabel(selectedDate)} às {selectedTime}
                </p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    required
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c8956a]/40 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    required
                    type="email"
                    placeholder="Seu e-mail"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c8956a]/40 transition-colors"
                  />
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-gray-500" />
                  <textarea
                    required
                    placeholder="Sobre o projeto..."
                    rows={3}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c8956a]/40 transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] mb-4">
                <p className="text-xs text-gray-500 leading-relaxed flex items-start gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#c8956a] flex-shrink-0 mt-0.5" />
                  <span>Ao confirmar, abrirá o <span className="text-white font-semibold">Google Calendar</span> com o evento criado e Geovanna já adicionada como convidada. Basta salvar e ela receberá o convite na hora.</span>
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl border border-[#1e1e1e] text-gray-400 text-sm hover:text-white hover:border-[#2a2a2a] transition-colors"
                >
                  ← Voltar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#c8956a] to-[#d4a882] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#c8956a]/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Criar convite no Google Calendar
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
