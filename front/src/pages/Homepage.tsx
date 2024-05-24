import { useQuery } from '@tanstack/react-query';
import { Author } from '../types/author.ts';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';

function App() {
    const { isPending, error, data } = useQuery({
        queryKey: ['authors'],
        queryFn: () =>
            fetch('http://localhost:8080/api/v1/authors').then((res) =>
                res.json()
            ),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <Header />
            <div>
                {data.map((author: Author) => (
                    <div key={author.id}>
                        <p>{author.firstName}</p>
                        <p>{author.lastName}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default App;
