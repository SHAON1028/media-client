import { useQuery } from "@tanstack/react-query";

export const useCmnt = (pId) => {
    console.log(pId)
    const { data: comments = [], refetch, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/comments/${pId}`);
            const data = await res.json();
            return {data,refetch};
        }
    })
    return comments
}