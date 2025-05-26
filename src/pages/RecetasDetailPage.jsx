import { PrivatePagesLayout } from '../layouts/PrivatePagesLayout'
import { useParams } from 'react-router-dom'
import { useIsMobile } from '../hooks/isMobile';
import { RecetasDetailMobile } from '../components/RecetasDetailMobile';
import { RecetasDetailDesktop } from '../components/RecetasDetailDesktop';



export const RecetasDetailPage = () => {

    // Extraigo el idReceta de los parámetros de la URL
    const { idReceta } = useParams();

    const isMobile = useIsMobile();

    return (
        <PrivatePagesLayout>
            { isMobile ? <RecetasDetailMobile /> : <RecetasDetailDesktop /> }
        </PrivatePagesLayout>
    )
}
