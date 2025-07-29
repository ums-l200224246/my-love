'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generateBirthdayMessage } from '@/ai/flows/generate-birthday-message';
import { Wand2, Copy, Check, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export default function AIGenerator({ name }: { name: string }) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setMessage('');
    try {
      const result = await generateBirthdayMessage({ name });
      setMessage(result.message);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate birthday message.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!message) return;
    navigator.clipboard.writeText(message);
    setCopied(true);
    toast({
      title: 'Copied to clipboard!',
      description: 'The birthday message is ready to be shared.',
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <h3 className="font-headline text-lg flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary/70" />
        AI Message Idea
      </h3>
      <Button onClick={handleGenerate} disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? 'Generating...' : 'Generate a wish'}
      </Button>

      {isLoading && (
         <Card className="mt-4 bg-secondary/50 border-accent/20">
          <CardContent className="p-3 space-y-2">
             <Skeleton className="h-4 w-full" />
             <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {message && !isLoading && (
        <Card className="mt-4 bg-secondary/50 border-accent/20">
          <CardContent className="p-3">
             <div className="relative">
                <p className="text-sm font-body pr-8">{message}</p>
                <Button variant="ghost" size="icon" className="absolute -top-1 -right-1 h-8 w-8 text-muted-foreground" onClick={handleCopy} aria-label="Copy message">
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
