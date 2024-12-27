import Hello from '../components/Hello';

export default function Home() {
  console.log('What am i doing here? -- SERVER/CLIENT');
  return (
    <>
      <div className="text-rose-800">Home</div>
      <Hello />
    </>
  );
}
