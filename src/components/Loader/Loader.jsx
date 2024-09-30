import { ColorRing } from 'react-loader-spinner';
import {SpinerContainer} from './Loader.styled'


 const Loader = () => {
     return (
        <SpinerContainer>
            <ColorRing
                visible={true}
                height="200"
                width="200"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={[ '#DEDEDE','#008767', '#FB4566', '#E2EFDF', '#67BC8E']}
            />
        </ SpinerContainer >
    )
}

export default Loader;