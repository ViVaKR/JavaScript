'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <h1>GlobalError</h1>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
