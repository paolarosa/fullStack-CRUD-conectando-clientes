import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "./styles";
import Vector from "../../assets/trash.jpg";

interface Movie {
    id: string;
    name: string
}

interface User{
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string
}

export const Dashboard = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const response = await api.get<Movie[]>("movies");
            setMovies(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        const fetchUser = async () => {
            try {
              const token = localStorage.getItem("token"); 
              if (token) {
                const responseUser = await api.get<User>("users/me", {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
                setUser(responseUser.data);
              }
            } catch (error) {
              console.log(error);
            }
          };
        fetchMovies();
        fetchUser();
    }, []);

     const cleanStorage = () => {
        localStorage.clear();
        navigate("/");
      };
    return(
        <DashboardContainer>
            <div className="nav">
                <button onClick={cleanStorage} className="buttonOut">
                    Sair
                </button>
            </div>
            <div className="divMain">
                <div className="movieTitle">
                  {user && <h2>Olá, {user.name}</h2>}
                <h2>Movies</h2>
                </div>
                <ul>
                    {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.name}
    
                    </li>
                    ))}
                </ul>
            </div>
         
        </DashboardContainer>
       
    )
}