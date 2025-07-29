import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Star, Flower } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-background min-h-screen text-foreground p-4 sm:p-6 md:p-8 font-body">
            <div className="w-full max-w-4xl mx-auto">
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
                                    src="https://placehold.co/600x800.png"
                                    alt="Potret Annisa Fitri Nur Salmi"
                                    width={600}
                                    height={800}
                                    className="rounded-xl shadow-lg object-cover w-full h-auto"
                                    data-ai-hint="elegant woman portrait"
                                />
                            </div>
                            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                                    Untuk Annisa, sosok yang kehadirannya seindah fajar dan senyumnya sehangat mentari. Di hari yang istimewa ini, kami merayakan 21 tahun perjalananmu yang penuh pesona dan kebaikan.
                                </p>
                                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                                    Semoga setiap langkahmu di usia yang baru ini dihiasi dengan kebahagiaan yang tak terhingga, kesuksesan yang gilang-gemilang, dan cinta yang tulus dari orang-orang di sekelilingmu.
                                </p>
                                <div className="flex justify-center md:justify-start flex-wrap gap-3 pt-2">
                                    <div className="flex items-center gap-2 text-accent-foreground bg-accent/50 p-2 rounded-lg text-sm">
                                        <Gift className="w-5 h-5"/>
                                        <span>Kebahagiaan</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary-foreground bg-primary/50 p-2 rounded-lg text-sm">
                                        <Star className="w-5 h-5"/>
                                        <span>Kesuksesan</span>
                                    </div>
                                     <div className="flex items-center gap-2 text-accent-foreground bg-accent/50 p-2 rounded-lg text-sm">
                                        <Flower className="w-5 h-5"/>
                                        <span>Keindahan</span>
                                    </div>
                                </div>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 mt-4 md:mt-6 text-sm sm:text-base">
                                    "Teruslah bersinar, karena dunia menjadi tempat yang lebih indah dengan adanya dirimu. Selamat ulang tahun, Annisa!"
                                </blockquote>
                            </div>
                        </main>
                    </CardContent>
                </Card>
            </div>
             <footer className="text-center mt-8 md:mt-10 py-4">
                <p className="text-sm text-muted-foreground">Dibuat dengan ❤️ khusus untukmu</p>
            </footer>
            {/* 
              Catatan: Karena alasan hak cipta, saya tidak dapat menyediakan file lagu secara langsung. 
              Silakan ganti `src` di bawah dengan URL atau path ke lagu "Selamat Ulang Tahun" dari Jamrud.
            */}
            <audio controls autoPlay loop className="fixed bottom-4 right-4 rounded-full shadow-lg w-64 md:w-80">
                <source src="/selamat-ulang-tahun-jamrud.mp3" type="audio/mpeg" />
                Browser Anda tidak mendukung elemen audio.
            </audio>
        </div>
    );
}
