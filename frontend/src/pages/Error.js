import { useRouteError } from 'react-router-dom';
import PageContent from './PageContent'
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
    const error = useRouteError();

    let title = 'Ocurrió un error.'
    let message = 'Qué lástima.'

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'No se encontró la página'
        message = JSON.parse(error.data).message;
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default ErrorPage;