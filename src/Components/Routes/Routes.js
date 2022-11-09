import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Service from '../Pages/Service/Service';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import MyReviews from '../Pages/MyReviews/MyReviews'
import PrivateRoute from '../Pages/../Routes/PrivateRoute'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import  AddService  from "../Pages/AddService/AddService";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement :<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/service',
                    
                element:<Service></Service>
            },
            {
                path:'/service/:id',
                loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`),
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:"/addservice",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
        ]
    }

])