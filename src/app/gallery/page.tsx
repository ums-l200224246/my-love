import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function GalleryPage() {
  const memories = [
    { src: "/images/1.jpg", hint: "friends laughing" },
    { src: "/images/2.jpg", hint: "couple sunset" },
    { src: "/images/4.jpg", hint: "group photo" },
    { src: "/images/3.jpg", hint: "city skyline" },
    { src: "/images/5.jpg", hint: "beach vacation" },
    { src: "/images/6.jpg", hint: "birthday party" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-background min-h-screen text-foreground p-4 sm:p-6 md:p-8 font-body">
      <div className="w-full max-w-6xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-12">
            <header className="text-center mb-8 md:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline text-primary leading-tight">
                What's in my Gallery
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-primary/80">
                Every second is a memory.
              </p>
            </header>

            <main>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {memories.map((memory, index) => (
                  <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={memory.src}
                      alt={`Memory ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={memory.hint}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-10 text-center">
                 <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/70 mt-4 md:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
                    "maaf yaahh kalau aku jarang fotoin km... but im really miss that day. hope you happy always"
                </blockquote>
              </div>

            </main>

            <footer className="text-center mt-10 md:mt-12">
              <Link href="/" passHref>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </footer>
          </CardContent>
        </Card>
      </div>
       <footer className="text-center mt-8 md:mt-10 py-4">
          <p className="text-sm text-muted-foreground">Made With ❤️</p>
      </footer>
    </div>
  );
}
