import useFetch from "./useFetch";

const SweetHome = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <>
            {data && data.map((dust) => {
                return <p key={dust.id}>UserId--{dust.userId}: {dust.title}</p>
            })}
        </>
    );
};
export default SweetHome;