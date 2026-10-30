export function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/** "terça-feira, 27 de outubro" com a primeira letra maiúscula. */
export function formatDateLabel(date: Date, locale: string): string {
  const label = date.toLocaleDateString(locale, { weekday: 'long', day: '2-digit', month: 'long' });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

/** Horários de meia em meia hora: dias úteis das 10h às 22h, fins de semana das 8h às 19h. */
export function getTimeSlots(date: Date): string[] {
  const start = isWeekend(date) ? 8 : 10;
  const end = isWeekend(date) ? 19 : 22;
  const slots: string[] = [];
  for (let h = start; h < end; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`);
    if (h < end - 1) slots.push(`${String(h).padStart(2, '0')}:30`);
  }
  return slots;
}

export function startOfDay(date = new Date()): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
