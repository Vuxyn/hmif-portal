export default async function Home() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/ping`,
      { cache: 'no-store'}
    );
    const data = await res.json();

    return (
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    )
}