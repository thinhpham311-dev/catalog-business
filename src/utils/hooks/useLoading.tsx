import { useState, useEffect } from 'react';

const useLoading = () => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setCounter((counter: number): number => {
                    const count: any = counter < 100 ? counter + 1 : clearInterval(intervalId)
                    return count
                });
            },
            25,
        );

        return () => {
            clearInterval(intervalId);
        };
    }, [counter])

    return { counter, setCounter }

}

export default useLoading