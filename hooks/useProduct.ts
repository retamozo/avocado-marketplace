import { useState, useEffect, } from 'react';

const useProduct = (id: string): TProduct => {
    const [product, setproduct] = useState<TProduct>();

    useEffect(() => {
        const fn = async () => {
            await window.fetch(`/api/avo/${id}`)
                .then(data => data.json())
                .then(setproduct)
        }
        fn()
    }, [id]);

    return product

}

export default useProduct