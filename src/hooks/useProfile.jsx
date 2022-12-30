import { useQuery } from "@tanstack/react-query";

export const useProfile = (email) => {
    console.log(email)
    const { data: data = [], refetch,  } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/profile/${email}`);
            const data = await res.json();
            return {data,refetch};
        }
    })
    return data
}