import React, { memo, useCallback, useEffect } from "react";
import Api from '../../api'
import Board from './components/Board'
import { ContainerStyled } from './style'

function Main() {
    const [data, setData] = useState({})
    const [coutry, setCountry] = useState('brazil')

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => console.log(data))
    }, [])

    useEffect(() => {
        getcovidData(country)
    }, [getCovidData, country])

    return (
        <ContainerStyled>
            <div className = "mb-2">

            </div>

            <Board data={data} />
        </ContainerStyled>
    )
}

export default memo(Main)