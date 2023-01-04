import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props) {
    const Component = props.Comp;
    let navigate = useNavigate();
  
    useEffect(() => {
        if (localStorage.getItem('user') === null) {
            navigate('/login', {replace:true});
        }
    }, []);

    return (
        <>
            <Component />
        </>
    )
}

export default Protected;