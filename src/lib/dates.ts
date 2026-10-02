/** Namoro começou em 7 de novembro de 2025 (America/Sao_Paulo). */
export const RELATIONSHIP_START = new Date("2025-11-07T00:00:00-03:00");

/** Encontro nas férias de dezembro de 2027. */
export const REUNION_AT = new Date("2027-12-20T00:00:00-03:00");

export type TimeUnits = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function daysInPrevMonth(from: Date): number {
  return new Date(from.getFullYear(), from.getMonth(), 0).getDate();
}

/** Diferença calendário-consciente entre duas instantes (end >= start). */
export function calendarDiff(start: Date, end: Date): TimeUnits {
  if (end.getTime() <= start.getTime()) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  let hours = end.getHours() - start.getHours();
  let minutes = end.getMinutes() - start.getMinutes();
  let seconds = end.getSeconds() - start.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    days += daysInPrevMonth(end);
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

export function pad2(n: number): string {
  return n.toString().padStart(2, "0");
}

export const UNIT_LABELS: { key: keyof TimeUnits; singular: string; plural: string }[] = [
  { key: "years", singular: "ano", plural: "anos" },
  { key: "months", singular: "mês", plural: "meses" },
  { key: "days", singular: "dia", plural: "dias" },
  { key: "hours", singular: "hora", plural: "horas" },
  { key: "minutes", singular: "minuto", plural: "minutos" },
  { key: "seconds", singular: "segundo", plural: "segundos" },
];
