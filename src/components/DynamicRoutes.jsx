import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useGetRoutes } from '../utils/usegetRoutes'

const DynamicRoutes = () => {
 const routes = useRoutes(useGetRoutes());
 return routes;
}

export default DynamicRoutes
