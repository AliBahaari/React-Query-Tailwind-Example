import { useQuery } from 'react-query';
import '../styles/FetchComponent.css';

function FetchComponent() {

    const { isLoading, data, isError, error } = useQuery('main-data', () => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json());
    });

    return (
        <div>
            <h2 className="text-center my-8 font-bold text-xl">These Data Are Fetched by React-Query!</h2>

            {
                isLoading ?
                    <p className="font-bold text-center">Loading...</p>
                :
                <div className="dataContainer flex flex-wrap justify-center">
                    {
                        data?.map(eachData => (
                            <div className="bg-blue-500 text-gray-50 m-2 p-4 flex justify-center items-center">
                                { eachData.title }
                            </div>
                        ))
                    }
                </div>
            }

            {
                isError ?
                    <p className="bg-red-500 font-bold p-4 text-white">
                        { error.message.toString().toUpperCase() }
                    </p>
                :
                    ''
            }
        </div>
    )
}

export default FetchComponent;