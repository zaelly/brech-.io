import axios from 'axios';

export const getUsers = async()=>{
    try {
        const response = await axios.get('')
        return response.data;
    }
    catch(error){
        console.error("Erro ao buscar usuário", error);
    }
}

//