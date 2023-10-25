export function formatDate(date: string) {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    if (diff < minute) {
        return "Agora mesmo";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `Há ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `Há ${hours} ${hours === 1 ? "hora" : "horas"}`;
    } else if (diff < week) {
        const days = Math.floor(diff / day);
        return `Há ${days} ${days === 1 ? "dia" : "dias"}`;
    } else {
        const weeks = Math.floor(diff / week);
        return `Há ${weeks} ${weeks === 1 ? "semana" : "semanas"}`;
    }
}
