import App from '../App';

export default function index() {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
}

index.layout = (page) => <App children={page} />;
