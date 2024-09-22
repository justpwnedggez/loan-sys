import App from '../App';

export default function Users() {
    return (
        <div>
            <h1>Users Master File</h1>
        </div>
    );
}

Users.layout = (page) => <App children={page} />;
