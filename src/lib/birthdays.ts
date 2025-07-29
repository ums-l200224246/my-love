import type { Birthday } from './types';

export const initialBirthdays: Birthday[] = [
  { id: '1', name: 'Aunt May', date: '05-08', notes: 'Loves gardening books and always sends the best cookies.' },
  { id: '2', name: 'Bestie Sarah', date: '08-15', notes: 'Planning a surprise party at the beach!' },
  { id: '3', name: 'Cousin Leo', date: '11-02', notes: 'He is into retro video games right now.'},
  { id: '4', name: 'Grandpa Joe', date: '01-20', notes: 'Get him a new fishing rod. The old one is getting rusty.'},
  { id: '5', name: 'Nisa', date: '09-25', notes: 'The big day! Let\'s make it special.' },
];

export const getNextBirthday = (month: number, day: number): Date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, month - 1, day);

    if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    return nextBirthday;
};

export const sortBirthdays = (birthdays: Birthday[]): Birthday[] => {
    return [...birthdays].sort((a, b) => {
        const [aMonth, aDay] = a.date.split('-').map(Number);
        const [bMonth, bDay] = b.date.split('-').map(Number);
        const nextA = getNextBirthday(aMonth, aDay);
        const nextB = getNextBirthday(bMonth, bDay);
        return nextA.getTime() - nextB.getTime();
    });
};
