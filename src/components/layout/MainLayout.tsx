import { FC } from 'react'
import { Navbar } from '../Navbar'

export const MainLayout: FC<any> = ({ children }) => {
    return (
        <div>
            <Navbar />

            {children}

        </div>
    )
}
