const OWNER_EMAIL = 'geovannamouradeveloper@gmail.com';

type CalendarEventParams = {
  date: Date;
  time: string;
  name: string;
  email: string;
  message: string;
};

function formatDateTime(d: Date): string {
  return (
    `${d.getFullYear()}` +
    `${String(d.getMonth() + 1).padStart(2, '0')}` +
    `${String(d.getDate()).padStart(2, '0')}` +
    `T${String(d.getHours()).padStart(2, '0')}` +
    `${String(d.getMinutes()).padStart(2, '0')}00`
  );
}

export function buildCalendarUrl({ date, time, name, email, message }: CalendarEventParams): string {
  const [hours, minutes] = time.split(':').map(Number);
  const start = new Date(date);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 60);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Reunião com ${name} — Portfólio Geovanna`,
    dates: `${formatDateTime(start)}/${formatDateTime(end)}`,
    details: `Solicitação via portfólio de Geovanna Moura\n\n👤 Nome: ${name}\n📧 E-mail: ${email}\n\n💬 Sobre o projeto:\n${message}\n\n⚠️ Aguardando confirmação de Geovanna.`,
    add: OWNER_EMAIL,
    sf: 'true',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function openCalendarEvent(params: CalendarEventParams): void {
  window.open(buildCalendarUrl(params), '_blank');
}
