import { useNavigate } from 'react-router-dom';

export function Header(){
    let navigate = useNavigate();
    return (
        <div className='header'>
            <h3>Excuser</h3>
            <div>
            <button
                     onClick={()=> {
                        navigate("/");
                    }}
                >
                    {" "}
                    Home
                </button>
                <button
                     onClick={()=> {
                        navigate("/about");
                    }}
                >
                    {" "}
                    About
                </button>
            </div>
        </div>
    )
}