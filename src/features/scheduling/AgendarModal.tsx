import { useRef, useState, type FormEvent } from 'react';
import { CalendarDays, Clock, Mail, MessageSquare, Send, User, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMessages } from '@/i18n/useMessages';
import { useModal } from '@/shared/hooks/useModal';
import { openCalendarEvent } from './calendar';
import { addDays, formatDateLabel, getTimeSlots, isWeekend, startOfDay } from './date';

type Props = { onClose: () => void };

const today = startOfDay();

/** Agendamento em 2 passos: escolher dia e horário, depois dados de contato. Termina abrindo o Google Calendar. */
export function AgendarModal({ onClose }: Props) {
  const t = useMessages().scheduling;
  const dialogRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [weekStart, setWeekStart] = useState(today);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  useModal(dialogRef, onClose);

  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  const slots = selectedDate ? getTimeSlots(selectedDate) : [];
  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: { target: { value: string } }) => setForm(f => ({ ...f, [key]: e.target.value })),
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    openCalendarEvent({ date: selectedDate, time: selectedTime, ...form });
    onClose();
  }

  return (
    <div className="ag-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="ag-title">
      <div ref={dialogRef} className="ag-modal" onClick={e => e.stopPropagation()}>
        <header className="ag-head">
          <span className="pf-game-icon"><CalendarDays size={20} /></span>
          <div>
            <h2 id="ag-title">{t.title}</h2>
            <p>{t.subtitle}</p>
          </div>
          <button type="button" className="ag-close" onClick={onClose} aria-label={t.close}><X size={18} /></button>
        </header>

        {step === 1 ? (
          <div className="ag-body">
            <div className="ag-hours">
              <div><small>{t.weekdays}</small><strong>{t.hoursWeekdays}</strong></div>
              <div><small>{t.weekends}</small><strong>{t.hoursWeekends}</strong></div>
            </div>

            <div className="ag-week">
              <button type="button" className="ag-round" aria-label={t.prevWeek} disabled={weekStart <= today} onClick={() => setWeekStart(d => addDays(d, -7))}><ChevronLeft size={18} /></button>
              <span>{t.pickDay}</span>
              <button type="button" className="ag-round" aria-label={t.nextWeek} onClick={() => setWeekStart(d => addDays(d, 7))}><ChevronRight size={18} /></button>
            </div>

            <div className="ag-days">
              {days.map(d => {
                const past = d < today;
                const selected = selectedDate?.toDateString() === d.toDateString();
                return (
                  <button
                    key={d.toISOString()}
                    type="button"
                    disabled={past}
                    aria-pressed={selected}
                    className={`ag-day ${selected ? 'is-on' : ''} ${isWeekend(d) ? 'is-weekend' : ''}`}
                    onClick={() => { setSelectedDate(d); setSelectedTime(null); }}
                  >
                    <span>{d.toLocaleDateString(t.locale, { weekday: 'narrow' })}</span>
                    <strong>{d.getDate()}</strong>
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <>
                <p className="ag-label"><Clock size={14} />{formatDateLabel(selectedDate, t.locale)}</p>
                <div className="ag-slots" role="group" aria-label={t.pickTime}>
                  {slots.map(slot => (
                    <button key={slot} type="button" aria-pressed={selectedTime === slot} className={selectedTime === slot ? 'is-on' : undefined} onClick={() => setSelectedTime(slot)}>{slot}</button>
                  ))}
                </div>
              </>
            )}

            <button type="button" className="ag-primary" disabled={!selectedDate || !selectedTime} onClick={() => setStep(2)}>
              {t.next}
            </button>
          </div>
        ) : (
          <form className="ag-body" onSubmit={submit}>
            <p className="ag-recap">
              <CalendarDays size={16} />
              {selectedDate && formatDateLabel(selectedDate, t.locale)} {t.at} {selectedTime}
            </p>

            <label className="ag-field">
              <User size={16} />
              <input required autoComplete="name" placeholder={t.name} {...field('name')} />
            </label>
            <label className="ag-field">
              <Mail size={16} />
              <input required type="email" autoComplete="email" placeholder={t.email} {...field('email')} />
            </label>
            <label className="ag-field ag-field--area">
              <MessageSquare size={16} />
              <textarea required rows={3} placeholder={t.about} {...field('message')} />
            </label>

            <p className="ag-note">{t.notePre}<strong>{t.noteStrong}</strong>{t.notePost}</p>

            <div className="ag-actions">
              <button type="button" className="ag-ghost" onClick={() => setStep(1)}>{t.back}</button>
              <button type="submit" className="ag-primary"><Send size={16} />{t.submit}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
