import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

 export const routes = [
    { 
        path:'/',
        page:HomePage,
        isShowHeader:true
    },



    { 
        path:'/sign-in',
        page:SignInPage,
        isShowHeader:false
    },
    { 
        path:'/sign-up',
        page:SignUpPage,
        isShowHeader:false
    },

    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    { 
        path:'/*',
        page:NotFoundPage
    },
]
