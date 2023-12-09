import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom'
import axios from 'axios'
import ClientInfo from './clientInfo/ClientInfo'
import ClientsList from './clientsList/ClientsList'
import ClientsGroup from './clientsGroup/ClientsGroup'

const Clients = ({ match }) => {
    const [clientsList, setClientsList] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            const getCustomers = async () => {
                try {
                    const data = await axios
                        .get('https://jsonplaceholder.typicode.com/users')
                        .then((res) => res.data)

                    setClientsList(data)
                    setLoading(false)
                } catch (error) {
                    setError('something went wrong....')
                    setLoading(false)
                }
            }
            getCustomers()
        }, 1000)
    }, [])

    return (
        <Switch>
            <Route
                path={`${match.url}/clientInfo/:id`}
                component={() => (
                    <ClientInfo clients={clientsList} loading={loading} />
                )}
            />
            <Route
                path={`${match.url}/clientsList`}
                component={() => (
                    <ClientsList
                        clients={clientsList}
                        loading={loading}
                        error={error}
                    />
                )}
            />
            <Route
                path={`${match.url}/clientsGroup`}
                component={() => <ClientsGroup />}
            />
            <Redirect from={`${match.url}`} to={`${match.url}/clientsList`} />
        </Switch>
    )
}

export default Clients
