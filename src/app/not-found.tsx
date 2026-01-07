import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-butter text-barolo">
            <h1 className="font-serif text-9xl mb-4">404</h1>
            <p className="font-mono text-xs uppercase tracking-widest mb-12 text-barolo/60">
                We could not find the page you were looking for.
            </p>
            <Link
                href="/"
                className="px-6 py-3 border border-barolo font-mono text-xs uppercase hover:bg-barolo hover:text-butter transition-colors"
            >
                Return Home
            </Link>
        </div>
    );
}
