"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-butter text-barolo">
            <h2 className="font-serif text-4xl mb-4">Something went wrong.</h2>
            <p className="font-mono text-xs uppercase tracking-widest mb-8 text-barolo/60">
                An unexpected error occurred.
            </p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 border border-barolo font-mono text-xs uppercase hover:bg-barolo hover:text-butter transition-colors"
            >
                Try again
            </button>
        </div>
    );
}
