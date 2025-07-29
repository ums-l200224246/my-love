'use client'

import { useState } from 'react';
import { initialBirthdays, sortBirthdays } from '@/lib/birthdays';
import type { Birthday } from '@/lib/types';
import BirthdayCard from '@/components/BirthdayCard';
import { AddBirthdayDialog } from '@/components/AddBirthdayForm';
import { PartyPopper } from 'lucide-react';

export default function Home() {
    const [birthdays, setBirthdays] = useState<Birthday[]>(sortBirthdays(initialBirthdays));

    const handleAddBirthday = (newBirthdayData: Omit<Birthday, 'id' | 'notes'>) => {
        const newBirthday: Birthday = { ...newBirthdayData, id: crypto.randomUUID(), notes: '' };
        setBirthdays(sortBirthdays([...birthdays, newBirthday]));
    };
    
    return (
        <div className="flex flex-col items-center bg-background min-h-screen text-foreground p-4 sm:p-6 md:p-8 font-body">
            <header className="w-full max-w-5xl text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-headline text-primary">Nisa's Birthday Countdown</h1>
                <p className="mt-2 text-lg text-muted-foreground">A joyful celebration of friends and family.</p>
            </header>
            <main className="w-full max-w-5xl">
                <div className="flex justify-end mb-4">
                    <AddBirthdayDialog onAddBirthday={handleAddBirthday} />
                </div>
                {birthdays.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {birthdays.map(bday => (
                            <BirthdayCard key={bday.id} birthday={bday} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card rounded-lg shadow-md border border-dashed border-primary/20">
                        <PartyPopper className="mx-auto h-12 w-12 text-muted-foreground" />
                        <h3 className="mt-4 text-lg font-semibold text-foreground">No birthdays yet</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Add a birthday to start the countdown!</p>
                    </div>
                )}
            </main>
            <footer className="w-full max-w-5xl text-center mt-12 py-4">
                <p className="text-sm text-muted-foreground">Made with ❤️ for Nisa</p>
            </footer>
        </div>
    );
}
