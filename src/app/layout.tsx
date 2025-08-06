import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Selamat Ulang Tahun ke-21, Annisa!",
  description: 'Sebuah persembahan spesial untuk Annisa Fitri Nur Salmi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        {/* 
          Catatan: Karena alasan hak cipta, saya tidak dapat menyediakan file lagu secara langsung. 
          Silakan ganti `src` di bawah dengan URL atau path ke lagu "Selamat Ulang Tahun" dari Jamrud.
        */}
        <audio controls autoPlay loop className="fixed bottom-4 right-4 rounded-full shadow-lg w-64 md:w-80 z-20">
            <source src="/audio/lagu.mp3" type="audio/mpeg" />
            Browser Anda tidak mendukung elemen audio.
        </audio>
      </body>
    </html>
  );
}
