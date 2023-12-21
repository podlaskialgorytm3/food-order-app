export const  Title = ({children}) => {
    return(
        <h1 id="title">
            <img src="./public/logo.jpg" alt="logo" width="50" height="50" />
            {children}
        </h1>
    )
}