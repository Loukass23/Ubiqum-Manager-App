import React from 'react'
import SpinningLogo from '../components/SpinningLogo'
import { Typography } from '@material-ui/core'

const Landing: React.FC = () => {
    return (
        <div>
            <SpinningLogo msg="Ubiqum Manager" />
            <Typography color="primary" component="h6" variant="h6" >
                Made with ❤ in Berlin
            </Typography>
        </div>
    )
}
export default Landing