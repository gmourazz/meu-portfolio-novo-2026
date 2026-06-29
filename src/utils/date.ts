export function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export function formatDateLabel(date: Date): string {
  return date.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
}

export function getTimeSlots(date: Date): string[] {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;
  const start = isWeekend ? 8 : 10;
  const end = isWeekend ? 19 : 22;
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
