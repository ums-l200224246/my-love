import type { Birthday } from '@/lib/types';
import { getNextBirthday } from '@/lib/birthdays';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Cake } from 'lucide-react';
import Countdown from './Countdown';
import AIGenerator from './AIGenerator';
import Notes from './Notes';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function BirthdayCard({ birthday }: { birthday: Birthday }) {
    const [month, day] = birthday.date.split('-').map(Number);
    const nextBirthdayDate = getNextBirthday(month, day);

    return (
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20 bg-card flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between bg-primary/10 p-4">
                <CardTitle className="font-headline text-2xl text-primary flex items-center gap-2">
                    <Cake className="text-accent"/>
                    {birthday.name}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-center flex-grow flex flex-col justify-center items-center">
                <Countdown targetDate={nextBirthdayDate} />
                <p className="text-sm text-muted-foreground mt-2">{nextBirthdayDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </CardContent>
            <CardFooter className="p-0 mt-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-t border-primary/20">
                    <AccordionTrigger className="px-4 py-2 hover:no-underline text-sm font-semibold text-primary/80 hover:bg-primary/5">
                        Wishes & More
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-background/50 space-y-6">
                        <Notes birthday={birthday} />
                        <AIGenerator name={birthday.name} />
                        <div className="flex items-center space-x-2 pt-4 border-t border-primary/10">
                            <Switch id={`reminder-${birthday.id}`} aria-label="Toggle reminder" />
                            <Label htmlFor={`reminder-${birthday.id}`} className="font-body">Set Reminder</Label>
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </CardFooter>
        </Card>
    );
}
