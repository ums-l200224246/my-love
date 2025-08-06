import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-background min-h-screen text-foreground p-4 sm:p-6 md:p-8 font-body">
      <div className="w-full max-w-lg mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-2xl rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-12 text-center">
            <Construction className="h-16 w-16 text-primary mx-auto mb-6" />
            <header className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-headline text-primary">
                404 - Page Not Found
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-primary/80">
                Oops! The page you're looking for doesn't seem to exist.
              </p>
            </header>

            <main>
              <p className="text-foreground/80">
                It might have been moved, or maybe you typed something wrong. Let's get you back on track.
              </p>
            </main>

            <footer className="mt-10">
              <Link href="/" passHref>
                <Button variant="outline">
                  Go Back to Home
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
