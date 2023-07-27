import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {CuadrosPicasso} from './CuadrosPicasso.jsx'
// import { ProductImagesSlider } from './cuadros/components/ProductImagesSlider'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <CuadrosPicasso />
    </BrowserRouter>

)
