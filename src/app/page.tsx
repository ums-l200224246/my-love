import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import { Fireworks } from '@/components/fireworks';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-background min-h-screen text-foreground p-4 sm:p-6 md:p-8 font-body relative overflow-hidden">
            <Fireworks />
            <div className="w-full max-w-4xl mx-auto z-10">
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl rounded-2xl overflow-hidden">
                    <CardContent className="p-6 md:p-12">
                        <header className="text-center mb-6 md:mb-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-primary leading-tight">
                                Selamat Ulang Tahun ke-21
                            </h1>
                            <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-headline text-primary/80">
                                Annisa Fitri Nur Salmi
                            </p>
                        </header>

                        <main className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="w-full md:w-1/2 flex-shrink-0">
                                <Image 
                                    src="/images/main.jpg"
                                    alt="Potret Annisa Fitri Nur Salmi"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                                    data-ai-hint="elegant woman portrait"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                                    Selamat Ulang tahun my love, moga tambah dewasa dan di permudah segala urusannya... Amiin
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                                    nggak banyak yang bisa ku sampaikan, semoga jadi lebih baik dari yang sebelumnya dan lekas sembuh
                                </p>
                                <div className="flex justify-center md:justify-start pt-4">
                                    <Link href="/gallery" passHref>
                                        <Button size="lg" className="bg-primary/80 hover:bg-primary">
                                            <Camera className="mr-2 h-5 w-5" />
                                            Lihat Galery
                                        </Button>
                                    </Link>
                                </div>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 mt-4 md:mt-6 text-sm sm:text-base">
                                    "Wish you all the best"
                                </blockquote>
                            </div>
                        </main>
                    </CardContent>
                </Card>
            </div>
             <footer className="text-center mt-8 md:mt-10 py-4 z-10">
                <p className="text-sm text-muted-foreground">Made With ❤️</p>
            </footer>
            {/* 
              Catatan: Karena alasan hak cipta, saya tidak dapat menyediakan file lagu secara langsung. 
              Silakan ganti `src` di bawah dengan URL atau path ke lagu "Selamat Ulang Tahun" dari Jamrud.
            */}
            <audio controls autoPlay loop className="fixed bottom-4 right-4 rounded-full shadow-lg w-64 md:w-80 z-20">
                <source src="/audio/selamat-ulang-tahun-jamrud.mp3" type="audio/mpeg" />
                Browser Anda tidak mendukung elemen audio.
            </audio>
        </div>
    );
}
