import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useGetRoutes } from '../hooks/usegetRoutes'

const DynamicRoutes = () => {
 const routes = useRoutes(useGetRoutes());
 return routes;
}

export default DynamicRoutes
